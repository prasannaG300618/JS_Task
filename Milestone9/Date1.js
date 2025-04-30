function Lear_year(year){

    if(year%4 == 0 && year%2==0){
        console.log("Leap Year")
    }else{
        console.log("Not Leap Year")
    }

}

let year = new Date().getFullYear()

Lear_year(2012)


