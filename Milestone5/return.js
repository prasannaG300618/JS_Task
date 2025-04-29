let promt = require("prompt-sync")()



  function check() {
    let credential = {
        username:"prasanna123",
        password:"123456"
    }
    let n = promt("Enter User name : ")
    let p  = promt("Enter password : ")
    if(n == credential.username && p == credential.password){
        return true
    }else{
        return false
        }

}
let entry = check()
if(entry){
    console.log("Welcome")
}else{
    console.log("Wrong credential")
}