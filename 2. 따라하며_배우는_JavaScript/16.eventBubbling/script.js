const submitBtn = document.querySelector('.submit-btn');
const form = document.querySelector('form');
const title=document.querySelector('h2');
const emailInput = document.getElementById('email');

//click event
submitBtn.addEventListener('click',handleEvent);
submitBtn.addEventListener('dblclick',handleEvent);

//form event
form.addEventListener('submit',handleEvent);
emailInput.addEventListener('keyup',handleEvent);
emailInput.addEventListener('keydown',handleEvent);

function handleEvent(e){

    if(e.type === 'submit'){
        e.preventDefault();
    }
  
    console.log(`Event Type : ${e.type}`);
    title.textContent = e.target.value;
}