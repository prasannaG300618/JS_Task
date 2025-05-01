function Car_Fact(name, gear){
    let car = {
        name,
        gear,
        Details:function(){
            console.log(name," car have ",gear," gear type")
        }
    }
    return car
}

let benz = Car_Fact("Benz","Automatic")
benz.Details()