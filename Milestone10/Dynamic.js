function Hospital(name, spl, Location){
    this.name = name
    this.spl= spl
    this.Location = Location
    if(this.Get_Location === undefined){
        Hospital.prototype.Get_Location=function(){
            console.log("Hospital located in ",this.Location)
        }
    }
}

let hsp1=new Hospital("Appollo","Heart","Chennai")
hsp1.Get_Location()

let hsp2=new Hospital("SRM","Kidney","Chennai")
hsp1.Get_Location()