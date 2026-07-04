// =====================================
// DALIET - SCRIPT.JS
// =====================================

// -----------------------------
// ANIMACIÓN DE LAS SECCIONES
// -----------------------------

const secciones = document.querySelectorAll("section");

function mostrarSecciones(){

    secciones.forEach(seccion=>{

        const posicion = seccion.getBoundingClientRect().top;

        if(posicion < window.innerHeight-100){

            seccion.classList.add("mostrar");

        }

    });

}

window.addEventListener("scroll",mostrarSecciones);

mostrarSecciones();


// -----------------------------
// FORMULARIO A WHATSAPP
// -----------------------------

const formulario=document.getElementById("formulario");

if(formulario){

formulario.addEventListener("submit",function(e){

e.preventDefault();

const nombre=document.getElementById("nombre").value;

const telefono=document.getElementById("telefono").value;

const correo=document.getElementById("correo").value;

const mensaje=document.getElementById("mensaje").value;

const texto=`🌿 Hola DALIET

👤 Nombre: ${nombre}

📱 Teléfono: ${telefono}

📧 Correo: ${correo}

📝 Mensaje:

${mensaje}`;

const url="https://wa.me/50239828309?text="+encodeURIComponent(texto);

alert("¡Gracias por comunicarte con DALIET! Ahora serás redirigido a WhatsApp.");

window.open(url,"_blank");

});

}


// -----------------------------
// BOTONES AGREGAR AL CARRITO
// -----------------------------

const botones=document.querySelectorAll(".producto button");

botones.forEach(function(boton){

boton.addEventListener("click",function(){

alert("✅ Producto agregado. Si deseas comprarlo, envíanos tu pedido por WhatsApp.");

});

});


// -----------------------------
// EFECTO EN EL MENÚ
// -----------------------------

const enlaces=document.querySelectorAll("nav a");

enlaces.forEach(function(link){

link.addEventListener("mouseenter",function(){

this.style.transform="scale(1.08)";
this.style.transition=".3s";

});

link.addEventListener("mouseleave",function(){

this.style.transform="scale(1)";

});

});


// -----------------------------
// MENSAJE DE BIENVENIDA
// -----------------------------

window.addEventListener("load",function(){

console.log("Bienvenido a DALIET");

});
