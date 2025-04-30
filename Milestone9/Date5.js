

setInterval(()=>{
    let Time = new Date()
let h = document.querySelector(".H")
let m = document.querySelector(".M")
let s = document.querySelector(".s")
    let Hour = Time.getHours()
    let Minute = Time.getMinutes()
    let second = Time.getSeconds()
    Hour>12?h.innerHTML=Hour-12:h.innerHTML=Hour
    m.innerHTML = Minute
    s.innerHTML = second

},1000)