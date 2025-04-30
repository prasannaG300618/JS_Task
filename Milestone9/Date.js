console.log("Create Date")
//Creating Date
const date = new Date()
console.log(date)

//Assign using constructor
const dt_with_cons = new Date(2002, 6, 30, 11, 30, 50)
console.log(dt_with_cons)

//assign date manualy
const dt_assin = new Date("2002-06-30T11:30:53")
console.log(dt_assin)

console.log("Formating of date")
//format date into local readable
let form_date = date.toLocaleDateString("en-US")
console.log(form_date)

let form_dat_tim = date.toLocaleString("en-US")
console.log(form_dat_tim)

const date_1 = new Date("2023-06-30")
const date_2 = new Date("2023-06-31")

if(date_1 > date_2){
    console.log(date_1+" is greater")
}else{
    console.log(date_2 + " is greater")
}    
console.log(date.getUTCFullYear())
console.log(date.getUTCMonth())
console.log(date.getUTCDate())
console.log(date.getUTCDay())
console.log(date.getUTCHours())
console.log(date.getUTCMinutes())
console.log(date.getUTCSeconds())


console.log("Conversion UTC to Local")



let offset = date.getTimezoneOffset()
console.log("Offser : ", offset)
let UTC = new Date(date.getTime()-offset*60000)
console.log(UTC)
console.log(date)

console.log("Epoach Time ")
let Epoach = Date.now()
let new_Date = new Date(Epoach)
console.log(Epoach)
console.log(new_Date)

