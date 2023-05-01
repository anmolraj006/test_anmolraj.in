let logo = document.getElementById("logo-img")
let bg = document.getElementById("sec1")
logo.addEventListener("mouseover",function(){
    console.log("1s")
    bg.style.backgroundColor='black'
})
logo.addEventListener("mouseleave",function(){
    console.log("1s")
    bg.style.backgroundColor='white'
})
