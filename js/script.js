// CARRUSEL AUTOMÁTICO (IMÁGENES Y VIDEO)

const slides = document.querySelectorAll(".slide");
let index = 0;

function cambiarSlide() {

slides[index].classList.remove("active");

// si es video lo pausamos
if (slides[index].tagName === "VIDEO") {
slides[index].pause();
}

index++;

if (index >= slides.length) {
index = 0;
}

slides[index].classList.add("active");

// si el slide es video lo reproducimos
if (slides[index].tagName === "VIDEO") {
slides[index].play();
}

}

setInterval(cambiarSlide, 5000);



/* SCROLL SUAVE A RESERVAS */

function scrollToReservas() {

document
.getElementById("reservas")
.scrollIntoView({ behavior: "smooth" });

}



/* RESERVA POR WHATSAPP */

function reservar() {

let nombre = document.getElementById("nombre").value;
let personas = document.getElementById("personas").value;
let fecha = document.getElementById("fecha").value;
let hora = document.getElementById("hora").value;

if(!nombre || !personas || !fecha || !hora){

alert("Por favor completa todos los campos");

return;

}

let mensaje = `Hola! Soy ${nombre}.
Quiero reservar mesa en Golden Bar.

Personas: ${personas}
Fecha: ${fecha}
Hora: ${hora}`;

let telefono = "573000000000"; // cambia por tu numero real

let url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

window.open(url, "_blank");

}



/* ANIMACIÓN AL HACER SCROLL */

const faders = document.querySelectorAll(".fade-in");

function mostrarElementos(){

const triggerBottom = window.innerHeight * 0.85;

faders.forEach(el => {

const top = el.getBoundingClientRect().top;

if(top < triggerBottom){

el.classList.add("show");

}

});

}

window.addEventListener("scroll", mostrarElementos);
mostrarElementos();
