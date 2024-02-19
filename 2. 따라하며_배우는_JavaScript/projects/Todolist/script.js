const list = document.getElementById("list");
const createBtn = document.getElementById("create-btn");



let todos = [];

createBtn.addEventListener('click', createNewTodo);

function createNewTodo(){
    //새로운 아이템 객체 생성
    const item = {
        id  : new Date().getTime(),
        text : "",
        complete: false
        }

    //배열에 처음에 새로운 아이템을 추가
    todos.unshift(item);
 
    // 요소 생성하기
    const{itemEl, inputEl} = createTodoElement(item);

    //리스트 요소 안에 방금 생성한 아이템 요소 추가(가장 첫번째 요소로 추가)
    list.prepend(itemEl);

    //disabled 속성 제거
    inputEl.removeAttribute("disabled");
    //input요소에 focus
    inputEl.focus();
   
    }   
 
function createTodoElement(item){
    const itemEl = document.createElement("div");
    itemEl.classList.add("item");

    const checkboxEl = document.createElement('input');
    checkboxEl.type='checkbox';


    const checkbox = document.createElement("input");
    checkbox.type ="checkbox";
    checkbox.checked = item.complete;

    if(item.complete){
        itemEl.classList.add("complete");
    };

    const inputEl = document.createElement("input");
    inputEl.type = "text";
    inputEl.value = item.text;
    inputEl.setAttribute('disabled','');

    const actionsEl = document.createElement("div");
    actionsEl.classList.add("actions");

    const editBtnEl = document.createElement("button");
    editBtnEl.classList.add("material-icons");
    editBtnEl.innerText = "edit";

    const removeBtnEl = document.createElement("button");
    removeBtnEl.classList.add("material-icons","remove-btn");
    removeBtnEl.innerText="remove_circles";

    

    actionsEl.append(editBtnEl);
    actionsEl.append(removeBtnEl);

    itemEl.append(checkbox);
    itemEl.append(inputEl);
    itemEl.append(actionsEl);

   

checkboxEl.addEventListener("change",()=>{
    item.complete = checkbox.checked;

    if(item.complete){
        itemEl.classList.add("complete");
    }else{
        itemEl.classList.remove('complete');
    }
});


inputEl.addEventListener("input",() => {
    item.text=inputEl.value;
});

inputEl.addEventListener("blur",()=>{
    inputEl.setAttribute("disabled","");
});


editBtnEl.addEventListener("click",()=>{
    inputEl.removeAttribute("disabled");
    inputEl.focus();
});

removeBtnEl.addEventListener('click',()=>{
   todos= todos.filter(t => t.id !== item.id);

    itemEl.remove();
});

return { itemEl, inputEl, editBtnEl, removeBtnEl, checkboxEl };
}
