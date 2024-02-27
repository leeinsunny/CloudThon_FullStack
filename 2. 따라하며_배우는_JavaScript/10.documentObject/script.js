let val;

val = document;

let val_uri = document.baseURI //웹 페이지의 절대 URI 반환

console.log(val_uri);

const headerContainer = document.getElementById('header-container');
// headerContainer.style.display = 'none';

// console.log(headerContainer);

headerContainer.textContent = 'text content';
headerContainer.innerText = 'inner text';
headerContainer.innerHTML = '<span>Inner HTML</span>'

const items = document.getElementsByClassName('list-group-item');
console.log(items);

items[0].style.color='blue';
items[1].style.color='red';
items[2].style.color='pink';
items[3].textContent="HI~HI~";

let lists = document.getElementsByTagName('li');
console.log(lists);

lists=Array.from(lists);
console.log(lists);

lists.forEach((list, index)=>{
    list.textContent=`${index}.List`
})

const liOdd = document.querySelectorAll('li:nth-child(odd)');

liOdd.forEach((li)=>{
    li.style.background='yellow';
})