//1. removeChild
/*
parentNode.removeChild(node);
하나의 노드를 삭제한다
삭제할 때는 삭제 할 노드를 자식으로 가진 부모 노드에서 실행된다
*/

const listParent = document.querySelector('ul');
const list = document.querySelectorAll('li');

//listParent.removeChild(list[1]);

//2. replaceChild
/*
parentNode.replaceChild(newChild, oldChild);
원래 있는 Child를 삭제하고 새 Child로 교체한다
교체할 때는 교체할 노드를 자식으로 가진 부모 노드에서 실행된다
*/

const oldElement = document.getElementById('A');
const newElement = document.createElement('span');

newElement.textContent = 'Hi';

oldElement.parentNode.replaceChild(newElement,oldElement);
