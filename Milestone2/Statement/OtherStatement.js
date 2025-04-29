//Assingement statement
let a = 10;
let b=20;

//Variable Declarations (var, let, const)
let l =10;
var v =20;
const con = 30;

//Expression Statements

let x = 10;
let y=30;
 y = y+x;
 x -= y;

//Control Flow Statements

if(a>5){
    console.log("A is greater then 5")
}

//Function Declarations

function display(){
    console.log(a)
}
show=()=>{
console.log("Show")
}
show()

//try catch

try{
     console.log(gh)
}catch(e){
    console.log("Error occured "+e)
}

//break and continue

for(let i=0;i<10;i++){
    if(i%2 ==0){
        continue
    }else{
        console.log(i)
    }
}
for(let i=0;i<10;i++){
    if(i%2 ==0){
        break
    }else{
        console.log(i)
    }
}

//return

function add(a, b){
    return a+b;
}
let newValaue =  add(10,12);

//Throw Statement
function checkAge(age) {
    if (age < 18) {
        throw new Error("Age must be 18 or older");
    }
}