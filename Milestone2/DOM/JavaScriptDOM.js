let color = document.querySelectorAll("#color")

color.forEach((e,index)=>{
    e.addEventListener("click",()=>{
        let c = color[index]
        alert(c.style.backgroundColor)
        let M = document.getElementById("Main")
        console.log(M.style.backgroundColor)
        M.style.backgroundColor = c.style.backgroundColor;
    })
})