"usestrict"
let Prompt = require("prompt-sync")()

let Promise = require("bluebird")

let Employee ={
    Prasanna : {
        Name :"Prasanna G",
        Role : "Web Developer Intern",
        id:"7",
        Package : 30000
    },
    Jeeva : {
        Name :"Jeeva",
        id:"10",
        Role : "Web Developer Intern",
        Package : 30000
    },
    Mufeed : {
        Name :"Mufeed",
        Role : "Mobile app dev",
        id:"8",
        Package : 30000
    },
    John : {
        name:"John",
        Role : "Java Develoer",
        id:"6",
        Package:30000

    }
}

function Exlpore(){
    console.log(Employee)
}

function Find_one(S_name){
    return new Promise((resolve,reject)=>{
        let k = Object.keys(Employee)
        k.map((name)=>{
        if(S_name==name){
            resolve(Employee[name])
        }else{
            reject("User Not Found")
        }
        })
    })
}

let opt = Prompt("Select Option(Enter Number Only) \n 1. Exlpore Employee \n 2. Find one \n 3. add one \n")



if(opt == 1){
    Exlpore()
    console.log("Value is ",opt)
}else if(opt == 2){
    let s = Prompt("Enter Name ")
    Find_one(s).then(res=>console.log(res))
}else if(opt == 3){
    let name = Prompt("Enter new name ")
    let Role= Prompt("enter Role ")
    let id = Prompt("enter ID ")
    let Package = Prompt("Enter Package ")
    Employee[name] = {
        name:[name],
        Role:[Role],
        id:[id],
        package:[Package]
    }
    setTimeout(()=>{
        console.log("New Employee details \n", Employee)
    },2000)
   
}


