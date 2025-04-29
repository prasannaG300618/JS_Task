function add(a){
 return function (b){
   console.log(a+b)
 }
}

const addnum = add(10)
console.log(addnum(5))