const name = '山田';
const age = 24;
const message = `名前は${name}, 年齢は${age}です。`
console.log(message)

const func = value => {
    return value;
}
console.log(func('testです'))

const func2 = (num1, num2) => num1 + num2;
console.log(func2(1, 2))

const func3 = (val1, val2) => (
    {
        name: val1,
        age: val2
    }
)
console.log(func3('山田', 24))

const myProfile = {
    name: '山田',
    age: 24
}
const { name, age } = myProfile
