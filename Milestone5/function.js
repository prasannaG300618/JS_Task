function prime( limit ){
let res=false
    for(let i = 2; i < limit; i++){
       if(limit%i == 0 ){
        res=true
           } 
        
}
if(res){
    console.log("Not a prime number")
}else{
    console.log("Prime Number")
}
}
prime(3)

