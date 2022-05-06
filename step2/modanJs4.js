const name = '山田';
const age = 24;

const user = {
    name,
    age
}

console.log(`名前は${name}, 年齢は${age}`)

const nameArr = ['山田', '田中', '佐藤']

// for (let index = 0; index < nameArr.length; index++) {
//     console.log(nameArr[index]);
// }

// const nameArr2 = nameArr.map((name) => {
//     return `名前は${name}`;
// });
// console.log(...nameArr2)

nameArr.map((name) => {
    console.log(`名前は${name}`);
});

nameArr.map((name, index) => {
    console.log(`${index}番目は${name}です。`)
})


const numArr = [1, 2, 3, 4, 5];
const newNumArr = numArr.filter((num) => {
    return num % 2 === 1;
})
console.log(...newNumArr);

const nameArr2 = ['山田', '崎岡', '後藤']
const newNameArr2 = nameArr2.map((name) => {
    if ('山田' !== name) {
        return `${name}さん`
    }
    return name
})

console.log(...newNameArr2)

const val1 = 1 > 0 ? "true" : "false"
console.log(val1)

const printFromatedNum = (num) => {
    const formattedNum = typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
    console.log(formattedNum);
}

printFromatedNum(10)
printFromatedNum("test")

const checkSumOver100 = (num1, num2) => {
    return num1 + num2 > 100 ? "100 Over" : "100 Under";
}

console.log(checkSumOver100(50, 49))
console.log(checkSumOver100(50, 50))
console.log(checkSumOver100(50, 51))
