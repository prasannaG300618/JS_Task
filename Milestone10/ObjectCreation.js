//literal 
let obj1 = {
    name:"Prasanna",
    age:22
}

//Constructor

let obj2 = new Object({
    name:"Prasanna",
    age:23
})

//create method
let obj3 = Object.create({
    name:"Mufeed",
    age:22
})

//function constructor
function Obj(name,age){
    this.name = name;
    this.age = age;
}

let obj4 = new Obj("Prasanna",23)
console.log(obj4)

//function const with proptotype

function emty() {}

emty.prototype.value = "Value 1"
let obj5 = new emty()
console.log(obj5.value)

//class object
class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
     display() {
    console.log(this.name,this.age)
    }
}

let obj6 = new Person("John Bharathi", 20)
obj6.display()

//single pattern
 detail=new function(){
    this.name="Swethitha K",
    this.age=20
 } 
 console.log(detail.name)