// SCROLL ANIMACION APPLE

const panels = document.querySelectorAll(".panel")

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("show")

}

})

},{
threshold:.4
})

panels.forEach(panel=>{
observer.observe(panel)
})




// CARRUSEL

let slides = document.querySelectorAll(".slide")
let index = 0

setInterval(()=>{

slides[index].classList.remove("active")

index = (index + 1) % slides.length

slides[index].classList.add("active")

if(slides[index].tagName==="VIDEO"){

slides[index].play()

}

},4000)

slides[index].classList.add("active")

// SCROLL RESERVAS

function scrollToReservas(){

document
.getElementById("reservas")
.scrollIntoView({behavior:"smooth"})

}


// WHATSAPP

function reservar(){

let nombre=document.getElementById("nombre").value
let personas=document.getElementById("personas").value
let fecha=document.getElementById("fecha").value
let hora=document.getElementById("hora").value

let mensaje = `Hola soy ${nombre}. 
Quiero reservar mesa para ${personas} personas 
el día ${fecha} a las ${hora} en Golden Bar y Boliranas`;
let telefono="573045717964"

window.open(`https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`)

}

document.addEventListener("DOMContentLoaded", function(){

const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("nav");

if(menuBtn && nav){
    menuBtn.addEventListener("click", function(){
        nav.classList.toggle("active");
    });
}

});
// GALERIA LIGHTBOX

const imagenes=document.querySelectorAll(".galeria-item")
const lightbox=document.getElementById("lightbox")
const lightboxImg=document.getElementById("lightbox-img")

imagenes.forEach(img=>{
img.addEventListener("click",()=>{
lightbox.style.display="flex"
lightboxImg.src=img.src
})
})

lightbox.addEventListener("click",()=>{
lightbox.style.display="none"
})
