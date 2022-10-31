// --------- GUARDAMOS NUESTRO FORMULARIO E INPUTS EN CONSTANTES ---------------
const $form = document.getElementById("form");
const $inputs = document.querySelectorAll("#form input")


// --------- OBJETO CON NUESTRAS EXPRESIONES REGULARES ---------------
const expresiones = {

    name: /^[a-zA-ZÀ-ÿ\s]{4,40}$/, // AQUI ACEPTARA LETRAS CON O SIN ACENTO Y ESPACIOS
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, // ACEPTA DE TODO MENOS CARACTERES ESPECIALES
    subject: /^[a-zA-ZÀ-ÿ\s]{1,40}$/ // AQUI ACEPTARA LETRAS CON O SIN ACENTO Y ESPACIOS
   


}


// -------------- OBJETO CON NUESTROS CAMPOS ----------------------
const campos = {

    name: false,

    email: false,

    subject: false

   

}


// --------- SWITCH PARA SELECCIONAR EL INPUT DONDE ÉSTE HACIENDO FOCO EL USUARIO  ---------------
const validarFormulario = (e) => {
    switch (e.target.name) {

        case "name":
            validarCampo(expresiones.name, e.target, "name");
            break;

        case "email":
            validarCampo(expresiones.email, e.target, "email");
            break;

        case "subject":
            validarCampo(expresiones.subject, e.target, "subject");
            break;

       





    }
}


// -------------- VALIDAMOS NUESTROS INPUTS ------------------------
const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document.getElementById(`grupo__${campo}`).classList.remove("formulario__grupo-incorrecto");
        document.getElementById(`grupo__${campo}`).classList.add("formulario__grupo-correcto");
        document.querySelector(`#grupo__${campo} i`).classList.remove("fa-times-circle");
        document.querySelector(`#grupo__${campo} i`).classList.add("fa-check-circle");
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove("formulario__input-error-activo");
        campos[campo] = true;
        console.log("Funciona");
    } else {
        document.getElementById(`grupo__${campo}`).classList.add("formulario__grupo-incorrecto");
        document.getElementById(`grupo__${campo}`).classList.remove("formulario__grupo-correcto");
        document.querySelector(`#grupo__${campo} i`).classList.add("fa-times-circle");
        document.querySelector(`#grupo__${campo} i`).classList.remove("fa-check-circle");
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add("formulario__input-error-activo");
        campos[campo] = false;
        console.log("Funciona");
    }
}





// --------- CAPTURAMOS CADA VEZ QUE EL USUARIO PRESIONA UNA TECLA ---------------
$inputs.forEach((input) => {
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur", validarFormulario);
});





