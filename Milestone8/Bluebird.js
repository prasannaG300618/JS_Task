const Promise = require("bluebird")

let obj = {
    name:"Prasanna",
    Age:22
}

function Display(){
    return Promise.try(()=>{
        return obj
    })
}
Display()


Promise.resolve(()=>{
    return obj
}).then(res=>console.log(res()))

let ar = [1,2,3,4,5]

Promise.map(ar,(num)=>num =  num*2).then(res=>console.log(res))
Promise.filter(ar,num=>num%2==0).then(res=>console.log(res))


