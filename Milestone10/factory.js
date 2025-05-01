function Food_order(Food_name){
    if(Food_name == "Mojito" || Food_name == "Badam milk" || Food_name == "Rose milk"){
        
        return{
            Food_name,
            Time:5,
            Order_tracking:function (){
                console.log("Your Order Will delivered With in ",this.Time,"  Minutes")
            }
        }
    }

    else if(Food_name == "Burger" || Food_name == "Pizza" || Food_name == "Fried Rice"){
        return{
            Food_name:Food_name,
            Time:10,
            Order_tracking:function (){
                console.log("Your Order Will delivered With in ",this.Time," Minutes")
            }
        }
    }

}

let Order1=Food_order("Mojito")
console.log(Order1.Food_name);
Order1.Order_tracking()

let Order2 = Food_order("Burger")
console.log("Order 2 ")
console.log(Order2.Food_name)
Order2.Order_tracking()

