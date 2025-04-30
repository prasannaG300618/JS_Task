let date = ["2024-06-30","2025-06-30","2024-06-29", "2025-01-20","2026-01-02"]

function max_date(date){
    let max = date[0];
    for(i in date){
        if(max < date[i]){
            max=date[i]
        }
    }
    return max
}

console.log(max_date(date))
