/* VALIDACIÓN - Los campos 'Nombre' y 'Apellido' no deben contener caracteres que no sean letras */

document.getElementById("form-contacto").addEventListener("submit", function(event) {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    
    // Expresión regular que permite solo letras (mayúsculas y minúsculas)
    var soloLetras = /^[a-zA-Z]+$/;

    if (!soloLetras.test(nombre) || !soloLetras.test(apellido) ) {
        event.preventDefault();
        alert("ERROR - Los campos 'Nombre' y 'Apellido' sólo deben contener letras. Por favor, ingrésalos correctamente.");
    }
});


/* VALIDACIÓN - El contenido del textarea debe contener entre 2 y 500 caracteres */
document.getElementById("form-contacto").addEventListener("submit", function(event) {
    var comentarios = document.getElementById("comentarios").value;

    if (comentarios.length >= 500) {
        event.preventDefault();
        alert("ERROR - El contenido de la sección \"Comentarios\" no debe exceder los 500 caracteres. Porfavor, intente nuevamente");
    }
});



/* VALIDACIÓN - El archivo ingresado es una foto */
document.getElementById("form-contacto").addEventListener("submit", function(event) {
    var archivosInput = document.getElementById("foto").files;

    // Si no hay imágenes, no hacemos verificaciones
    if (archivosInput.length === 0) {
        return;
    } else {
        // Verificar que todos los archivos ingresados sean imágenes
        var tiposPermitidos = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];

        for (var i = 0; i < archivosInput.length; i++) {
            if (!tiposPermitidos.includes(archivosInput[i].type)) {
              event.preventDefault();
              alert("ERROR - Todos los archivos adjuntos deben ser imágenes (jpeg, jpg, png, gif). Por favor, corrija los archivos.");
              return;
            }
        }
    }
});