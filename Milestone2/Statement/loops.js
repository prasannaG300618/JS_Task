for(let i=0;i<5;i++){
    console.log(i+" ")
}

let obj = {
    name:"Prasanna G",
    Age:22
}

for (let key in obj) {
    console.log(obj[key])
}

let arr = [3,1,2,3,4]

arr.forEach((e,i)=>{
    console.log(i+" "+e)
})

let i=0;
while( i < 5){
    console.log(i)
    i+=1;
}

for (const i of arr) {
    console.log(i)
}



