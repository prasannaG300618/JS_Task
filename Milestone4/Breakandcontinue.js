
 

for(let i=0;i<10;i++){
    if(i%2 == 0){
        continue
    }else{
        console.log(i)

    }
} //1,3,5,7,9

console.log("For 2nd loop")
for(let i=0;i<10;i++){
  if(i==5){
    break;
  }else{
    console.log(i)
  }
}
//01234