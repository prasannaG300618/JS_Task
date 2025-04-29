let arr = [1,2,5,6,7,8,9,10]

arr.map(e=>{
    console.log(e);
})

let odd = arr.filter((num)=>{
    if(num%2 != 0){
        return num
    }
})

let even = odd.map(num=>num+1)

console.log(odd)
console.log(even)

let max = arr.reduce((ac, num)=>ac>num?ac:num,arr[0])
let tot = arr.reduce((ac,cu)=>ac+cu, 0)
console.log(max)
console.log(tot)
console.log(arr.find((num)=>num<10))
console.log(arr.findLast((num)=>num<10))
console.log(arr.findIndex((num)=>num==6))