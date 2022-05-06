const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1)

const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;

console.log(num1);
console.log(num2);
console.log(arr3)

const arr4 = [10, 20];
const arr5 = [30, 40];
const arr6 = [...arr4];

console.log(arr4)
console.log(arr6)

const arr7 = [...arr4, ...arr5]
console.log(arr7)