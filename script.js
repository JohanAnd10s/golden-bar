// Carrusel automático con video
let slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(() => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");

    if (slides[index].tagName === "VIDEO") {
        slides[index].play();
    }
}, 4000);

// Scroll suave a reservas
function scrollToReservas() {
    document.getElementById("reservas").scrollIntoView({ behavior: "smooth" });
}

// WhatsApp Reserva
function reservar() {
    let nombre = document.getElementById("nombre").value;
    let personas = document.getElementById("personas").value;
    let fecha = document.getElementById("fecha").value;
    let hora = document.getElementById("hora").value;

    let mensaje = `Hola, soy ${nombre}. Quiero reservar mesa para ${personas} personas el día ${fecha} a las ${hora} en Golden Bar`;
    let telefono = "573000000000"; // CAMBIA POR TU NUMERO
    window.open(`https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`);
}

// Animación al hacer scroll
const faders = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
    faders.forEach(el => {
        const rect = el.getBoundingClientRect().top;
        if (rect < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
});