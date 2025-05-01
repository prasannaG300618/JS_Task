function Bank(card_type,pin){
    let card={}
    let _card_type= card_type
    let _pin = pin
    card.Get_card = function(){
        console.log("card type is ",_card_type," Password is Restricted")
    }
    return card
}

let ATM = Bank("ATM","1212")
ATM.Get_card()

