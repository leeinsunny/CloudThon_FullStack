let fo;

fo = String(111);
fo = String(8 + 4);
//연산식도 String()안에 넣는다면 길이를 알 수 있음

console.log(1)
console.log("fo : ",fo);
console.log("fo의 type : ",typeof fo);
//String에는 .length라는 메소드로 길이를 알 수 있음
console.log("fo의 길이 : ",fo.length);

let fo_2 = true;
console.log("fo_2 : ",fo_2);
console.log("fo_2의 type : ",typeof fo_2);
console.log("fo_2의 길이 : ",fo_2.length);
//boolean의 경우 .length를 하면 길이를 알 수 없음

let fo_3 = String(true);
console.log("fo_3(string함수 씌운 것) : ",fo_3);
console.log("fo_3의 type : ",typeof fo_3);
console.log("fo_3의 길이 : ",fo_3.length);


console.log("--------------------------------")
console.log(2)
//날짜를 뽑아볼 수도 있음
let kdate = new Date();

console.log("kdate : ",kdate);
console.log("kdate의 type:",typeof kdate);
console.log("kdate의 길이 : ",kdate.length);

let kdate_tostring = String(new Date());
console.log("kdate_toString : ",kdate);
console.log("kdate_toString의 type:",typeof kdate);
console.log("kdate_toString의 길이 : ",kdate.length);

console.log("--------------------------------")
console.log(3)
let val = [1,2,3,4,5];
console.log("val :",val);
console.log("val의 type :",typeof val);
console.log("val의 길이 : ",val.length);

console.log("--------------------------------")
console.log(4)
let val_toString = String([1,2,3,4,5]);
console.log("val_toString :",val);
console.log("val_toString의 type :",typeof val_toString);
console.log("val_toString의 길이 : ",val_toString.length);




