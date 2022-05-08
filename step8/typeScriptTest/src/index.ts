let num: number = 0;
num = 10;
console.log(num);

const arr1: Array<number> = [0, 1, 2];
arr1.push(4);
console.log(arr1);

let null1: null = null
console.log(null1);

let undefined1: undefined = undefined;
console.log(undefined1);

let any1: any;
any1 = false;
any1 = 10;
any1 = "10";
console.log(any1);

const funcA = (num: number): void => {
    console.log(num);
}
funcA(10);

const obj : { str: string, num: number } = {
    str: "A",
    num: 10,
}

obj.str = "B";
obj.num = 20;
console.log(obj);

const obj2 : { str: string } & { num: number } = {
    str: "A",
    num: 10,
}

obj2.str = "10";
obj2.num = 20;
console.log(obj2);

type TypeA = {
    str: string,
    num: number,
}
type TypeB = {
    str: string,
    bool: boolean,
}

type TypeC = TypeA & TypeB;

const obj3: TypeC = {
    str: "A",
    num: 10,
    bool: false,
}
console.log(obj3);

let val1: string | number = "";
val1 = "A";
val1 = 10;
console.log(val1);

type CustomerType<T> = {
    val: T,
}

const strObj: CustomerType<string> = { val: "A" };
console.log(strObj);
const numObj: CustomerType<number> = { val: 10};
console.log(numObj);