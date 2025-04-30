var fac = 1;
function Factorial(n){
    if(n===1){
        return 1
    }else{
        return Factorial(n-1)*n
    }

}

console.log(Factorial(5));
