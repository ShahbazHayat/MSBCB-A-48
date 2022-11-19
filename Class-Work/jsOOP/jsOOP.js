/* class Employee {
    constructor(name ="", dept = "general")
    {
        this.name=name;
        this.dept=dept;
    }

    
}

class Manager extends Employee
{  
    constructor(){

        this.employee=[]
    }

}

class WokerBee extends Employee
{
    constructor(project="") {
        this.project=[]
    }
}

class SalesPerson extends WokerBee
{
    constructor(quota=100,dept = "sales") {
        this.quota=quota
        this.dept=dept
    }   
}

class Engineer extends WokerBee
{
    constructor(machine="",dept = "engineering"){
        this.machine=machine
        this.dept=dept
    }
} */



/* class person {
    #name;
    constructor (name){
        this.name=name
    }

    displayName(){
        console.log(`Name: ${this.name}`)
    }

    get Name()
    {   
        console.log('im hare set function')
        return this.#name;
    }

    set Name(name)
    {   
        console.log('im hare set function')
         this.#name=name;
    }
}

var objPerson = new person('Muhammad');

console.log(objPerson.Name) //getter

objPerson.Name='Ahmad'; //setter

console.log (objPerson.Name);//getter 



class Teacher extends person{

    constructor(name,age){
        super(name);

        this.age=age;
    }

    aboutMe(){
        console.log(`Name : ${this.name},Age : ${this.age}`);
    }

}

var objTeacher = new Teacher('ibrahim',24);
objTeacher.aboutMe(); */


