"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add1(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
console.log(add1(2, 3));
console.log(add1(2, 3, 5));
const sub = (num1, num2, num3 = 10) => num1 - num2 - num3;
console.log(sub(2, 3));
console.log(sub(2, 3, 5));
const mult = function (num1, num2) {
    return num1 * num2;
};
function add2(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}
let numbers = [1, 2, 3, 4, 5];
console.log(add2(2, 3, ...numbers));
console.log(add2(2, 3, 5, 6, 7));
function getItem(item) {
    return new Array().concat(item);
}
let concatResult = getItem([1, 2, 3, 4, 5]);
let concatString = getItem(["a", "b", "c", "d", "e"]);
