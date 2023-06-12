"use strict";
let lname;
lname = 'john';
let newname = lname.toUpperCase();
console.log(newname);
let age;
age = 25;
age = 25.4;
let dob = "25";
let result = parseInt(dob);
console.log(dob);
let isValid = false;
console.log(isValid);
let empList;
empList = ["santosh", "ganesh"];
let numlist;
numlist = [1, 2, 3, 4, 5];
let result1 = numlist.filter((num) => num > 2);
let emp = empList.find((emp) => emp === "santosh");
let sum = numlist.reduce((acc, num) => acc + num);
console.log(emp);
console.log(result1);
console.log(sum);
let c = 2 /* Color.Blue */;
let swapNum;
function swapNumbers(num1, num2) {
    return [num2, num1];
}
swapNum = swapNumbers(10, 20);
swapNum[0];
swapNum[1];
let department;
department = "IT";
department = "csc";
department = 10;
console.log(department);
function add(num1, num2) {
    return num1 + num2;
}
let newsum = add(10, 20);
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
