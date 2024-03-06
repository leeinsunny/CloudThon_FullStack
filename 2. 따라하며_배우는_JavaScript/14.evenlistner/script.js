window.onload = function(){
    //문서가 load될 때 이 함수를 실행

    let text = document.getElementById('text')
    //아이디가 'text'인 요소를 return

    text.innerText = 'HTML 문서 loaded';

}

const aElement = document.querySelector('a');
aElement.addEventListener('click',()=>{
    alert('a element Clicked');
})

const buttonElement = document.querySelector('.btn2');
buttonElement.addEventListener('click', (event)=>{
    let val;
    val = event.target.id;

    let val_class;
    val_class = event.target.className;

    let val_classlist = event.target.classList

    let val_type = event.type;

    //윈도우로부터의 거리 좌표
    let val_clienty = event.clientY;

    //요소로부터의 거리 좌표
    let val_offsetY = event.offsetY;


    // console.log('id : '+ val);
    // console.log('class : '+ val_class);
    // console.log('classList : ', val_classlist);
    // console.log('type : ', val_type);
    // console.log('clientY:',val_clienty);
    console.log('offsetY : ',val_offsetY);
})