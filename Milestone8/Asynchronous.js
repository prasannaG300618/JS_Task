const { resolve, reject } = require("bluebird")

// set timout
console.log(1)
setTimeout(()=>{
    console.log("Delayed by 1 sec")
},1000)
console.log(2)

//callbackfunction

function Asyn_example(v, callback ){
console.log (v+" is passed argument")
let name = "Prasanna G"
callback(name)
}

function show_name(name){
    console.log(name+" is argument name from user")

}
Asyn_example(2,show_name)


function first(){
    console.log("Callback ",1)
}
function second(){
    console.log("callback ",2)
}
function third(){
    console.log("callback",3)
}

first(third(second())) //callback

function Promise_example(val){
return new Promise((resolve, reject)=>{
    if(!val){
        setTimeout(()=>{
            reject(console.log("Rejected"))
        },1000)
        
    }else{
        resolve(console.log("Accepted"))
    } 
})
}

let Pr = Promise_example(false)
Pr.then((res)=>{console.log(res)}).catch((err)=>console.log(err))

Asyn_example(2, ()=>{
    console.log(2+3)
})

let year_pr = new Promise((resolve)=>{
    let date = new Date()
    let year = date.getFullYear()
    resolve(year)
})

function Day_pr(){
    return new Promise(resolve=>{
        let date = new Date()
        let day = date.getDay()
        resolve(day)
    })
} 

//Async await
async function dis_day(){
    let day = await Day_pr()
    let year = await year_pr   
   console.log("Day From async function "+day )
    console.log("Day From async function "+year )
} 

//chain
dis_day()
year_pr.then(res=>console.log(res)).then(Day_pr).finally(console.log("hii"))


function one(){
    return new Promise(resolve=>{
        resolve("One")
    })
}

function two(){
    return new Promise(resolve=>{
        resolve("Two")
    })
}

one().then(res=>{return two()}).then(res=>console.log(res))


let details={
    name:"Prasanna G",
    age:22
}

function getData(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(details)
        }    
            ,3000)
       
    })
  

}

async function data(){
    let data = await getData()    
    console.log("Delayed 3 sec ",data)
}

data()