"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    constructor(id, name, address) {
        this.address = address;
        this.id = id;
        this.name = name;
    }
    static getEmplyeeCount() {
        return 50;
    }
    ;
    login() {
        return { name: "john", id: 1, email: "" };
    }
    getNameWithAddress() {
        return `${this.name + " stays at " + this.address}`;
    }
    get empId() {
        return this.id;
    }
    set empId(id) {
        this.id = id;
    }
}
class Manager extends Employee {
    constructor(id, name, address) {
        super(id, name, address);
    }
}
let john = new Employee(1, "john", {
    streat: "ABC",
    city: "Banglore",
    state: "Karnataka",
    pin: "416416"
});
john.empId = 100;
console.log(john.empId);
Employee.getEmplyeeCount();
let address = john.getNameWithAddress();
console.log(address);
// john.id = 1;
// john.name = 'john';
// john.address = 'Highway 71';
console.log(john);
let mike = new Manager(1, "john", { streat: "ABC",
    city: "Banglore",
    state: "Karnataka",
    pin: "416416" });
let address2 = mike.getNameWithAddress();
