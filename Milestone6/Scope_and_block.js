let a = 10
function parent(){
    let b =15;
    function child(){
    console.log(b+a)
    }
    child()
}

parent()

function demo(){
    let date =  new Date()
    console.log(date.getMinutes())
}

function Day(){
    let date = new Date()
    console.log(date.getDay())
}
//there no naming problem because each declared in seperate local scope

demo()
Day()

function display(){
    a=11
    if(a>10){
        var result = true
    }
    console.log(result)
}
//Var is function scope so we can use it outsite the blco whereas let adn const are block scope so we can't use it outside the block
display()