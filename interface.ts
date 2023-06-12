export interface User {
    name : string;
    age? : string;
    id : number;
    email : string;
}

let use : User = {name:"john",id:1,email:""};

//object destructring
let {name: userName, email: userEmail}: User = {name:"john",id:1,email:""};

// use.name;
// use.email;
userName;

interface Employees extends User {
salary : number;

}

let employee:Employees={name:"john",id:1,email:"",salary:100}

export interface login {
    login():User;
}

let [user1,user2,...restUsers]: User[] = [
    {name:"john",id:1,email:""},
    {name:"john1",id:2,email:""},
    {name:"john2",id:3,email:""},
    {name:"john3",id:4,email:""}
];

console.log(user1);
console.log(user2);
console.log(restUsers);

//let result = restUsers.filter(user => user.id > 3);
