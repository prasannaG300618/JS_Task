//shallow and deep copy

let obj = {
    name:"Audi",
    type:"car",
    gear:"automatic"
}

let obj2 = obj //shallow copy

obj2.name="Benz"
console.log(obj)//car name changed
console.log(obj2)//car name changed

//Deepcopy

let car1 = {
    name:"audi",
    type:"car",
    gear:"Automatic"
}

let car2 = JSON.parse(JSON.stringify(car1))


car2.gear = "Manual"

console.log(car1)//value remain same
console.log(car2)//value remain changed as a new object
