//global

let global = "Global variable"

//block 
{
    let name = "Prasanna"
    console.log(name) //print name
}
//console.log(name) return err

//function

function display(){
    let name = "Prasanna g",
    age=22
    console.log(name,age, global)   
}

display()
//lexical 

function parent(){
    let name="Parent"
    function  child() {
        console.log(name)
    }
    child()
}

parent()



