 function Person(){

 }

 Person.prototype.name = "No name";
 Person.prototype.age = 22
 Person.prototype.display = function(){
    console.log("Name: ",this.name," Age: ",this.age)
 }

 let Prasanna = new Person()
 Prasanna.name = "Prasanna"
 Prasanna.age = 22
 Prasanna.display()