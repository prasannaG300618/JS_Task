function Local_time_changer(zone, input_dt){
    let dt = new Date(input_dt)
    switch(zone){
        case "India":
            console.log("From Indian Time line",dt.toLocaleString("ta-IN"))
            break
        case "US":
            console.log("From US Time line",dt.toLocaleDateString("en-US"))
            break
        case "German":
            console.log("From Germal Time line",dt.toLocaleDateString("en-GR"))
            break
        default:
            console.log("Sorry select from these [India, US, German]")
    }
}

let date = new Date()

Local_time_changer("India", date)
