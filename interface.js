"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let use = { name: "john", id: 1, email: "" };
//object destructring
let { name: userName, email: userEmail } = { name: "john", id: 1, email: "" };
// use.name;
// use.email;
userName;
let employee = { name: "john", id: 1, email: "", salary: 100 };
let [user1, user2, ...restUsers] = [
    { name: "john", id: 1, email: "" },
    { name: "john1", id: 2, email: "" },
    { name: "john2", id: 3, email: "" },
    { name: "john3", id: 4, email: "" }
];
console.log(user1);
console.log(user2);
console.log(restUsers);
//let result = restUsers.filter(user => user.id > 3);
