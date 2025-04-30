let cricketer = {
    name:"Dhoni",
    Role:"Wicket Keeper",
    caption:true,
    score:()=>{
        console.log(Math.floor(Math.random()*200))
    }
}

let Display = ()=>{
console.log(cricketer)
}

function show(){
    console.log(cricketer)
}

()=>{
    cricketer.name="MS Dhoni"
}

Display()
show();
cricketer.score();




