console.log("1.글자: \n 안녕하세요");
console.log("2. 숫자: \n", 123);
console.log("3. 불리언 타입(1): \n", false);
console.log("4. 불리언 타입(2):\n",true);

var greeting = '이인선님 오늘도 화이팅👍';
console.log("5. 변수: \n",greeting)

console.log("6. 객체: \n", {a:'사과', b:'바나나', c:"파인애플"});

console.log("7. 표: \n",);
console.table({이름:'이인선', 나이:'23', 요즘_최애음식:"그릭요거트", 지금_기분: "졸린데 그래도 할 만하다"});

console.error('8. 에러 : 아니 근데 에러는 굳이 만들어보고 싶지 않다 노이로제 걸리겠어');

console.warn('9. 경고 : 근데 이렇게 하나씩 다 치면서 하는데 과제 언제 다하냐');

console.log('10. time과 time end활용 (무언가를 출력할 때까지 얼마의 시간이 걸리는가)');

console.time('wakeup');
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.timeEnd('wakeup');

console.log('11. 콘솔창의 모든 기록을 지우고 싶을 때 clear: console.clear');

//console.clear();