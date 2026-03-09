// carrusel automático

let index = 0

const slides = document.querySelector(".slides")

function moveCarousel(){

index++

if(index > slides.children.length - 1){
index = 0
}

slides.scrollTo({
left: index * 320,
behavior: "smooth"
})

}

setInterval(moveCarousel,4000)


// luces discoteca

setInterval(()=>{

document.body.style.backgroundColor =
`rgb(0,0,${Math.floor(Math.random()*40)})`

},1500)
