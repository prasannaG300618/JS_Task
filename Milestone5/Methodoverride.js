class Parent{
    constructor(){
        this.name="parent";
        this.type="class";
    }

    display() {

        console.log(this.name+" "+this.type)
    }
}

class child extends Parent{
    display(){
        super.display()
        console.log(" i am from child")
    }
}

let p = new Parent()
let c = new child()
c.display()
p.display()