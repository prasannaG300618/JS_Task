//Yesterday
function Yesterday(Day){
    let date = new Date(Day);
    date.setDate(date.getDate()-1)
    console.log(date.toString())

}

Yesterday("Jun 30, 2002")