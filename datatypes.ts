let lname : string;

lname = 'john';

let newname = lname.toUpperCase();

console.log(newname);

let age:number;

age = 25;
age = 25.4;

let dob = "25";

let result = parseInt(dob);

console.log(dob);


let isValid : boolean = false;

console.log(isValid);

let empList : string[];

empList = ["santosh","ganesh"];

let numlist : Array<number>;

numlist = [1,2,3,4,5]

let result1 = numlist.filter((num)=> num > 2);

let emp = empList.find((emp)=>emp==="santosh");

let sum = numlist.reduce((acc, num)=>acc + num);

console.log(emp);

console.log(result1);

console.log(sum);

const enum Color {
    Red,
    Green,
    Blue
}

let c:Color = Color.Blue;

let swapNum: [firstNumber: number,secondNumber:number];

function swapNumbers(num1:number,num2:number) : [number,number]{
    return [num2,num1]
}

swapNum = swapNumbers(10,20);
swapNum[0];
swapNum[1];

let department : any;

department = "IT";
department = "csc";
department = 10;

console.log(department);

function add(num1:number,num2:number){
    return num1 + num2;
}

let newsum = add(10,20);
console.log(newsum);

//lname = 10;
/* 
string
number
boolean
array
enum
tuple
any
void
never
*/