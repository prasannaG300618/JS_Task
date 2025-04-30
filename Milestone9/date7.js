const old_format = new Date("Nov 2, 2025")
let arr = ["Nov 2, 2025", "2002-03-22","30-04-2023","90-23-1231"]
function Formater(date){
    return new Promise((resolve,reject)=>{
        const old_format = new Date(date)
        if(old_format){
            const date = old_format.toLocaleDateString('en-IN', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric'
              });
              resolve(date)
        }else{
            reject("Invalid Date")
        }
       
    })
  
}

for(i in arr){
    Formater(arr[i]).then(res=>console.log(res)).catch((e)=>{console.log(e)})
}


 

