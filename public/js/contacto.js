document.addEventListener("DOMContentLoaded", function() {
    const contactoForm = document.getElementById("contacto-form");
    const mensajeEnviadoDiv = document.getElementById("mensaje-enviado");

    contactoForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita la recarga de la página al enviar el formulario

        const nombreInput = document.getElementById("nombre");
        const emailInput = document.getElementById("email");
        const mensajeInput = document.getElementById("mensaje");

        const nombre = nombreInput.value.trim();
        const email = emailInput.value.trim();
        const mensaje = mensajeInput.value.trim();

        if (!nombre || !email || !mensaje) {
            alert("Todos los campos son obligatorios");
            return;
        }

        // Simulación de envío exitoso
        mensajeEnviadoDiv.style.display = "block";
        contactoForm.reset(); // Limpia el formulario después de mostrar el mensaje

      
        setTimeout(function() {
            mensajeEnviadoDiv.style.display = "none";
        }, 5000); // Ocultar después de 5 segundos
        
    });
});