const spreadSheetContainer = document.querySelector("#spreadsheet-container");
const exportBtn = document.querySelector("#export-btn");
const ROWS = 10;
const COLS = 10;
const spreadsheet = [];
const alphabets = [
"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"
];

class Cell{
    constructor(isHeader, disabled, data, row, column,rowName, columnName, active=false){
        this.isHeader=isHeader;
        this.disabled=disabled;
        this.data=data;
        this.row=row;
        this.column=column;
        this.rowName=rowName;
        this.columnName=columnName;
        this.active=active;
    }
}

exportBtn.onclick = function(e){
    let csv = ""
    for(let i=0; i<spreadsheet.length; i++){
        if(i===0)continue;
        //근데 csv뽑아보면 맨 위에가 한 칸 띄워져있을거임 
        //그게 밑에서 header필터링해서 그런것임
        csv +=
            spreadsheet[i]
                .filter((item)=>!item.isHeader)
                //위에 부분은 데이터를 넣을 때 header부분을 필터링하는 부분이다.
                .map((item)=>item.data)
                .join(',')+"\r\n"
    }
    const csvObj = new Blob([csv]);
    const csvUrl = URL.createObjectURL(csvObj);
    //위에가 접근을 위한 url을 만드는 부분임
    console.log("csv",csvUrl);

    const a = document.createElement("a");
    a.href= csvUrl;
    a.download = "insun's spreadsheet.csv";
    a.click();
}

initSpreadsheet();

function initSpreadsheet(){
    for(let i=0; i < COLS; i++){

        let spreadsheetRow = [];

        for(let j=0; j < COLS; j++){
            let cellData = '';
            let isHeader = false;
            let disabled = false;

            //모든 row의 첫 번째 컬럼에 숫자 넣기
            if(j===0){
                cellData=i;
                isHeader=true;
                disabled=true;
                //모든 가로의 첫번째 세로는 header다
            }

            if(i===0){
                cellData = alphabets[j-1];
                isHeader=true;
                disabled=true;
                //모든 세로의 첫번째 가로는 header다
            }

            //첫 번째 row의 컬럼은 "";
            if(!cellData){
                cellData="";
            }

            const rowName = i;
            const columnName = alphabets[j-1];

            const cell = new Cell(isHeader, disabled, cellData,i,j,rowName,columnName, false);
            spreadsheetRow.push(cell);
        }
        spreadsheet.push(spreadsheetRow);
    }
    drawSheet();
    // console.log(spreadsheet);
}

/*
배열로 되어있는 데이터를 객체 데이터로 형성해줄거다.
스프레드시트의 각각의 셀마다 각각의 데이터를 가지고 있어야한다
셀이 header라면 (예: 세로의 A,B,C.. 가로의 1,2,3,..)
- isHeader는 true로, 사용자가 클릭은 못하게 disabled도 true로
*/

function createCellEl(cell){
    const cellEl = document.createElement('input');
    cellEl.className = 'cell';
    cellEl.id='cell_'+ cell.row + cell.column;
    cellEl.value = cell.data;
    cellEl.disabled = cell.disabled;

    if(cell.isHeader){
        cellEl.classList.add("header");
    }

    cellEl.onclick = ()=>handleCellClick(cell);
    cellEl.onchange = (e)=>handleOnChange(e.target.value,cell);


    return cellEl;
}

function handleOnChange(data,cell){
    cell.data=data;
}

function handleCellClick(cell){
    clearHeaderActiveStates()
    const columnHeader = spreadsheet[0][cell.column];
    const rowHeader = spreadsheet[cell.row][0];
    const columnHeaderEl = getElFromRowCol(columnHeader.row, columnHeader.column);
    const rowHeaderEl = getElFromRowCol(rowHeader.row, rowHeader.column);
    columnHeaderEl.classList.add('active');
    rowHeaderEl.classList.add('active');
    // console.log("clicked cell",columnHeader,rowHeader);
    document.querySelector("#cell-status").innerHTML = cell.columnName + cell.rowName
}

function clearHeaderActiveStates(){
    const headers = document.querySelectorAll(".header");

    headers.forEach((header)=>{
        header.classList.remove('active');
    })


}



function getElFromRowCol(row,col){
    return document.querySelector("#cell_" + row + col);
}


function drawSheet(){
    for(let i=0; i<spreadsheet.length; i++){
        const rowContainerEl = document.createElement("div");
        rowContainerEl.className="cell-row";

        for(let j=0; j<spreadsheet[i].length; j++){
            const cell = spreadsheet[i][j]; 
            rowContainerEl.append(createCellEl(cell));
            
        }

        spreadSheetContainer.append(rowContainerEl);
    }
}