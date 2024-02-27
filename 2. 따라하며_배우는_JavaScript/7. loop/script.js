console.log("===========================")
console.log("1. 간단한 for문")

for(let i=0; i<10; i++){
    if(i===3){
        console.log("It is 3");
        continue;
    }
    
    if(i===5){
        console.log("It is 5");
        break;
    }


    console.log('Number'+ i);
}

console.log("===========================")
console.log("2. for/in \n 객체의 속성(property)을 따라 반복합니다")

const user={
    name:'han',
    province:'경기도',
    city:'성남시'
}

for(let x in user){
    console.log(`${x} : ${user[x]}`);
}

console.log("===========================")
console.log("3. while \n 지정된 조건이 true인 동안 코드 블록을 반복")

let i = 0;
while(i<10){
    console.log('Number '+i);
    i++;
}

console.log("===========================")
console.log("4. do/while \n do/while은 while루프의 변형이다 \n 이 루프는 조건이 true인지 검사하기 전에 코드 블록을 한 번 실행한다. \n 그러고 나서 조건이 true인 동안 루프를 반복한다");


let a=0;

do{
    console.log('Number' + a);
    a++;
}

while(a<10)

console.log("===========================")
console.log("5.배열을 Loop로 이용해서 컨트롤해주자")

//Loop through Array
const locations = ['서울','부산','경기도','대구'];

//for
// for(let i=0; i<locations.length; i++){
//     console.log(locations[i]);
// }

//foreach
locations.forEach(function(location,index,array){
    console.log(`${index} : ${location}`);
    console.log(array);
})

//map
locations.map(function(location){
    console.log(location);
})

console.log("===========================")
console.log("6.for vs for each")
console.log("- For 루프는 원래 사용되었던 접근 방식이지만, forEach는 배열 요소를 반복하는 새로운 접근 방식이다 \n- For 루프는 필요한 경우 break문을 사용하여 for 루프를 중단할 수 있지만 forEach에서는 이와 같은 작업을 수행할 수 없다\n- For 루프는 await과 (비동기 반환을 기다리는 것) 함께 작동하지만 forEach는 await과 완벽하게 작동하지 않는다\n- For 루프를 사용한 성능은 forEach루프보다 빠르다");

console.clear()




