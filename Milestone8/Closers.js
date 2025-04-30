
function display(){
    let a =10;
    let b= 20;
    return function add(){
        return a+b
    }
}
let add = display();
console.log(add());