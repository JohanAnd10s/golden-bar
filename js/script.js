// MENU MOVIL

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click",()=>{
nav.style.display = nav.style.display === "flex" ? "none" : "flex";
});



// SCROLL RESERVAS

function scrollToReservas(){

document
.getElementById("reservas")
.scrollIntoView({behavior:"smooth"});

}



// RESERVAS WHATSAPP

function reservar(){

let nombre = document.getElementById("nombre").value;
let personas = document.getElementById("personas").value;
let fecha = document.getElementById("fecha").value;
let hora = document.getElementById("hora").value;

if(!nombre || !personas || !fecha || !hora){

alert("Completa todos los campos");

return;

}

let mensaje = `Hola! Soy ${nombre}.
Quiero reservar mesa en Golden Bar.

Personas: ${personas}
Fecha: ${fecha}
Hora: ${hora}`;

let telefono = "573000000000";

window.open(`https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`);

}
