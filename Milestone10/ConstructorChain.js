function check(climate){
    this.climate = climate
    this.Dislay = function(){
        console.log("Climate is ",this.climate)
    }
}

function climate_add(name){
    check.call(this,name)
}

let Chill = new climate_add("chill")
Chill.Dislay()