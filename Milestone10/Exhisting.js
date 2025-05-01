
let Batch1 = {}

Object.defineProperties(Batch1,{
    can1:{value:{name:"Prasanna",age:22},
    enumerable:true,
    writable:true,
    configurable:true},
    can2:{
        value:{name:"Mohamed mufeed", age:18},
        enumerable:true,
    writable:true,
    configurable:true
    }
})

let val = Object.getOwnPropertyDescriptors(Batch1)
console.log(val)
let k = Object.getOwnPropertyNames(val)
function check(name){
for(i of k){
let result = false
    if(val[i].value.name === name)
    result = true

    return result

}
}

if(check("Prasanna")){
    console.log("You are in Batch 1")
}else{
    console.log("Opps! you are Not in the list")
}