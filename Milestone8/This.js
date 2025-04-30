let name = "Global"

let obj = {
    name : "Prasanna",
    age:22,
    display: function show(){
        console.log(this.name, this.age)
    }

}

obj.display()