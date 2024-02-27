let foo = "bar"
let foo_1 = true
let foo_2 = 1

console.log(typeof foo);
console.log(typeof foo_1);
console.log(typeof foo_2);

//원시 타입
//문자열 String
const name = "han"

//number
const age = 30;

//Boolear
const hasjob = true;

//null
const car = null;

//undefined
let anything;

//symbol
const sym = Symbol();

/*
참조 타입
1. array타입
근데 배열을 type of 씌워서 알아보면, object타입으로 나옴. 왜냐, 배열도 object객체의 한 종류임
그렇다면 typeof를 해서 object객체라고 결론이 나오면 이게 진짜 object인지 배열인지 어떻게 알수있나?
=> 그때 Array.isArray()라는 메소드를 사용해보면 된다.() 안에 내가 알아보고 싶은 object를 넣고
true가 나오면 array인거임
*/
const hobbies = ['walikng', 'books', "listening"];

//2. object객체
const address = {
    province: '경기도',
    city : '성남시'
}

console.log("address의 타입 :",typeof address);
console.log("hobbies의 타입 :",typeof hobbies);
console.log("hobbies가 array인가? : ",Array.isArray(hobbies));
console.log("address가 array인가? : ",Array.isArray(address));