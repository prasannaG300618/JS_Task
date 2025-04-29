let details = {
    name:"Prasanna G",
    age:22,

    display:function display(){
        for(let key in details){
            console.log(key+" "+details[key])
        }
    }
}

console.log(details.name)
details.employee="Calibraint Trainee"
details.name = "Prasanna Ganesan"

console.log("Object Values ")
details.display()

for(let key in details){
    console.log(key)
}

delete (details.age)

details.display()


