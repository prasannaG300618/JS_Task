function Date_conversion (zone, date){

    let new_date = Intl.DateTimeFormat("ta-IN",{
        Timezone:zone,
        hour:"numeric", year:"numeric", month:"numeric",
        date:"numeric", day:"numeric",timeZoneName:"short"
    })
    console.log(new_date.format(date))
}

Date_conversion("America/New Yark", new Date())