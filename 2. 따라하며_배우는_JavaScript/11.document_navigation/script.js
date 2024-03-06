let val;

const list = document.querySelector('ul.list-group');
const listItem = document.querySelector('li.list-group-item:first-child');

console.log('list',list);
console.log('listItem',listItem)

val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;

console.log('val',val);