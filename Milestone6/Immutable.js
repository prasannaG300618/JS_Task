// immudable-primitive data typesd
let val = 10;
let val2 = val;
val2 = val+2;

//sperate memory for each variable
//by change val2 it not affect value of val1
console.log(val2)
console.log(val)

//mudable-reference data types
let og ={
    name:"Prasanna G"
}
let cp = og //poiting the memory of og

cp.age = 22;

console.log(og)
console.log(cp)

//to make it mutable use aissign() or seperate operator

cpmute = {...og} // cpmute = Object.assign(og) we can use this also

cpmute.dot = "30/06/2002"

console.log(cpmute)

let ogar = [1,2,3,4,5]
let cpar = ogar
 cpar.pop();
console.log(ogar) //value changed [2,3,4,5]

let cp_mute_ar = [...ogar]
cp_mute_ar.push(5)
console.log(cp_mute_ar)
