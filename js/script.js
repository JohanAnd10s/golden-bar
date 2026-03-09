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
// CONTADOR TORNEO

let torneo = new Date("2026-03-20 20:00").getTime();

let x = setInterval(function(){

let ahora = new Date().getTime();

let distancia = torneo - ahora;

let dias = Math.floor(distancia/(1000*60*60*24));

let horas = Math.floor((distancia%(1000*60*60*24))/(1000*60*60));

let minutos = Math.floor((distancia%(1000*60*60))/(1000*60));

let segundos = Math.floor((distancia%(1000*60))/1000);

let contador = document.getElementById("countdown");

if(contador){

contador.innerHTML = dias+"d "+horas+"h "+minutos+"m "+segundos+"s";

}

},1000);
