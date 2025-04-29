const prompt = require('prompt-sync')();

 let b = prompt("Enter age : ")
     
 console.log(b)
 switch(true){
    case b>=0 && b<=10 : 
    console.log("You are too young to vote")
    break;
    case b>10 && b<18:
        console.log("Wait some years to vote")
        break;
    case b<=18:
        console.log("Eligible for vote")
        break;
    default:
        console.log("Enter Correct age")
 }

