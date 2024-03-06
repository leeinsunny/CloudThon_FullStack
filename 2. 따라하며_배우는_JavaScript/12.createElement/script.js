//1. element 생성
const li = document.createElement('li');

//2. 새로 생성된 요소에 class이름 추가해주기
li.className = 'list-group-item';

//3. 새로 생성된 요소에 id를 추가하기
li.id='new-item';

//4. 생성된 li태그를 부모태그 ul밑에 들어가게 하기
document.querySelector('ul.list-group').appendChild(li);

/*
1. appendChild()메소드는 한 노드를 특정 부모 노드의 자식 노드 리스트 중 마지막 자식으로 붙인다.
만약 주어진 노드가 이미 문서에 존재하는 노드를 참조하고 있다면 appendChild() 메소드는 노드를 현재 위치에서 새로운
위치로 이동시킨다.

2. appendChild()에서 ()안에 새로 생성된 li 노드를 적어주면 된다
*/

//5. 새로 생성된 요소에 속성 추가하기
li.setAttribute('name','New list item');
//첫 번째 인자로 속성의 이름을 두 번째 인자로 속성의 값을 적는다


//~~~~~~~~~~~~~~~~~~~~~
//1. link element생성하기
const link = document.createElement('a');

//새로 생성된 link요소를 위에서 만든 li태그에 넣을 것임

link.className = 'alarm-item';
link.innerHTML= '<i class="bi-alarm"></i>';
li.appendChild(link);


