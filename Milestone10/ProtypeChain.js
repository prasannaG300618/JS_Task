function Library(name,Location){
        this.name=name;
        this.Location=Location;
        this.Display=function(){
            console.log("Library located at ",this.Location)
        
    
}}


let Anna = new Library("Anna","Channai") 
let Periyar = new Library(Anna)
Periyar.name= "Periyar"
Periyar.Location = "Trichy"
Periyar.Display()



