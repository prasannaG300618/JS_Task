let users = {};

Object.defineProperties(users,{
    Admin:{
        value:{username:"admin@123",
        password:"AD@1122"},
        enumerable:true,
        writable:false,
        configurable:false,
      
    },
    User1:{
        value:{"username":"1@123",
        "password":"123"},
        writable:true,
        enumerable:true

    },
    User2:{
        value:{"username":"2@123",
        "password":"123"},
        writable:true,
        enumerable:true
    }
})

let k = Object.getOwnPropertyNames(users)
function check(Properties){
    result = false
    k.map(v=>{
        if(v == Properties){
        result = true
        }
    })
    return result
}

function Change(Prop,new_val={}){
    let avail = check(Prop)
    if(!avail){
        console.log("Properties not Defined")
    }else{
       let Write = Object.getOwnPropertyDescriptors(users)[Prop].writable
        if(!Write){
            console.log("Cannot be change")
        }else{
            users[Prop] = new_val
            console.log("Changes applied")
            console.log("new Value ",users[Prop])
        }

    }

}

Change("Admin",{name:"Prasanna"})
Change("User1",{name:"Prasanna",password:"PRAS@123"})
Change("User4",{name:"Prasanna",password:"PRAS@123"})