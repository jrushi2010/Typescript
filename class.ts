import { User, login } from "./interface";

interface Address { 
    streat: string;
    city: string;
    state: string;
    pin: string;
}

class Employee implements login{
    private id!: number;

    protected name!:string;

    address : Address


    static getEmplyeeCount(): number{
        return 50;
    };

    constructor(id:number,name:string,address:Address){
        this.address = address;
        this.id=id;
        this.name = name;
    }
    login(): User {
        return {name:"john",id:1,email:""};
    }

    getNameWithAddress():string{
        return `${this.name + " stays at " + this.address}`;
    }

    get empId():number{
        return this.id;
    }

    set empId(id:number){
        this.id = id;
    } 
}

class Manager extends Employee {

    constructor(id: number, name:string, address:Address){
        super(id,name,address);
    }
}


let john = new Employee(1,"john",{
    streat:"ABC",
     city:"Banglore",
     state:"Karnataka",
     pin:"416416"
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


let mike = new Manager(1,"john",{ streat:"ABC",
city:"Banglore",
state:"Karnataka",
pin:"416416"});

let address2 = mike.getNameWithAddress();