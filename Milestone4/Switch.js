let promt = require("prompt-sync")();
let f = promt("Enter Fruit name : ")
switch(f){
    case "apple":
        console.log("Apple is in color of red, some are in green, it is very tasty fruit")
        break
    case "orange":
        console.log("Orange in color of orange, it is cirtric fruit")
        break
    case "banana":
        console.log("Its is cheap and best fruit for nutritions")
        break
    default:
        console.log("select amoung this fruits apple, orange, banana")
}