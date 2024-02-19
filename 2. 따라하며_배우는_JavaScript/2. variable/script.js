console.log("1.var : 여러 번 선언 가능, 여러 번 할당 가능 \n \t    다음의 3개 예시 참고")

var greeting = 'Hello';
console.log(greeting);

var greeting = 'Hi';
console.log(greeting);

greeting='How are you?';
console.log(greeting);

console.log("💥하지만 var의 경우, 코드의 뒷부분에서 값이 변경되면서 어떤 부분에서 값이 변경되었는지를 파악하기 어려워짐 \n -> 소스코드 관리가 어려움 \n -> 그래서 자바스크립트에서 변수를 만들 때는 var을 많이 사용안함");

console.log("____________________________________")


console.log("2.let : 중복해서 선언은 불가능, 재할당은 가능");

let let_greeting = "안녕";
console.log("1차 호출 : ",let_greeting);

//let let_greeting = "안녕안녕";
console.log("2차 선언 후 호출 : 불가능 ");

greeting="안녕안녕안녕"
console.log("let 없이 'greeting=' 쓰고 옆에 재할당 하면 : ", greeting)
console.log("____________________________________")

console.log("3.const : 상수의 약자로, 중복 선언과 재할당 모두 불가능");
const const_greeting = "안녕하십니까"
console.log("1차 호출 :",const_greeting)



