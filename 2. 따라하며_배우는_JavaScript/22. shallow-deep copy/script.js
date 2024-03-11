//shallow copy
const aArray = [1,2,3];

//shallow copy with spread operator
const bArray = [...aArray,4];
console.log('aArray : ', aArray);
console.log('bArray :',bArray);
console.log('aArray===bArray :',aArray === bArray)