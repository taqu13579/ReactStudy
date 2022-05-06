const myProfile = {
    name: '山田',
    age: 24
}
const { name, age } = myProfile;
const message = `名前は${name}, 年齢は${age}です。`;
console.log(message);

const { name: newName, age: newAge } = myProfile;
const message2 = `名前は${newName}, 年齢は${newAge}です。`;
console.log(message2)

const myProfile2 = ['山田', 24];
const [newName3, newAge3] = myProfile2;
const message3 = `名前は${newName3}, 年齢は${newAge3}です。`;
console.log(message3)

const myProfile4 = {
    age: 24,
}

const { newName4 = '山田' }  =myProfile4
const message4 = `名前は${newName4}`
console.log(message4)
