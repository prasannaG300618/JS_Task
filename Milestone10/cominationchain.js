function bank(name, Location){
    this.Location = Location;
    this.name = name;
this.show=function(){
    console.log(this.name +" is located at ",this.Location)
}
}

function Bank_name(name, location){
    bank.call(this, name, location)
}

Bank_name.prototype = Object.create(bank.prototype)
Bank_name.prototype.constructor = Bank_name

let KVB = new Bank_name("KNB","Trichy")
KVB.show()