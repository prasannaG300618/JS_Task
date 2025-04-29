const promt = require("prompt-sync")()

let a = promt("Enter your age : ")

if(a<10){
    console.log("You are not eligble to play the game")
}else{
    console.log("You are eligble to play tha game")
}
