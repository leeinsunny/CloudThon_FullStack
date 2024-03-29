const spreadSheetContainer = document.querySelector('#spreadsheet-container');
const ROWS = 10;
const COLS = 10;
const spreadsheet = [];
const alphabets = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"
    ];

class Cell{
    constructor(isHeader, disabled, data, row, column, active=false){
        this.isHeader  = isHeader;
        this.disabled = disabled;
        this.data = data;
        this.row = row;
        this.column = column;
        this.active = active;
    }
}





initSpreadsheet();    

function initSpreadsheet(){

    for(let i=0; i<ROWS; i++){
        let spreadsheetRow = []
        for(let j=0; j<COLS; j++){
            let cellData = ""

            if(j===0){
                cellData=i;
            }

            if(i===0){
                cellData=alphabets[j-1];
                isHeader = true;
                disabled = true;
            }


            if(!cellData){
                cellData="";
            }

            const rowName = i;
            const columnName = alphabets[j-1];


            const cell = new Cell(isHeader,disabled,cellData,i,j,false);
            //모든 셀들을 위한 인스턴스 객체 생성
            spreadsheetRow.push(cell);
        }
        spreadsheet.push(spreadsheetRow);
    }
    drawSheet();
    console.log(spreadsheet)
   
}

//cell하나하나를 객체로 만들어줘
//'cell'이 객체 데이터임

function createCellEl(cell){
    const cellEl = document.createElement("input");
    cellEl.className="cell";
    cellEl.id = 'cell_'+ cell.row + cell.column;
    cellEl.value = cell.data;
    cellEl.disabled = cell.disabled;

    if(cell.isHeader){
        cellEl.classList.add('header');
    }

    cellEl.onclick = ()=>handleCellClick(cell);

    return cellEl;
}

function handleCellClick(cell){
    console.log('clicked cell',cell);
    const columnHeader = spreadsheet[0][cell.column];
    const rowHeader = spreadsheet[cell.row][0];
    const columnHeaderEl = getElFromRowCol(columnHeader.row,columnHeader.column);
    const rowHeaderEl = getElFromRowCol(rowHeader.row,rowHeader.column);
    columnHeaderEl.classList.add('active')
    rowHeaderEl.classList.add('active')
}

function getElFromRowCol(row,col){
    return document.querySelector('#cell_'+ row + col);
}

function clearHeaderActiveStates(){
    const headers = document.querySelectorAll(".header");

    headers.forEach((header)=>{
        header.classList.remove('active');
    })
}


function drawSheet(){
    for(let i=0; i<spreadsheet.length; i++){

        const rowContainerEl = document.createElement('div');
        rowContainerEl.className = "cell-row";

        for(let j=0; j<spreadsheet[i].length; j++){
            const cell = spreadsheet[i][j];
            rowContainerEl.append(createCellEl(cell))
       
        }
        spreadSheetContainer.append(rowContainerEl);
    }
}