const nameInput = document.querySelector("#name")
const email = document.querySelector("#email")
const mensaje = document.querySelector("#mensaje")
const success = document.querySelector("#success")
const errorNodes = document.querySelectorAll(".error")

function validateForm() {

    clearMessages();


    if (nameInput.value.length < 1) {
        errorNodes[0].innerText = "Completa tu nombre";
        nameInput.classList.add("error-border");


    }

    if (!emailIsValid(email.value)) {
        errorNodes[1].innerText = "email invalido";
        email.classList.add("error-border");


    }

    if (mensaje.value.length < 1) {
        errorNodes[2].innerText = "Por favor ingrese su mensaje";
        mensaje.classList.add("error-border");


    }



}

function clearMessages() {
    for (let i = 0; i < errorNodes.length; i++) {
        errorNodes[i].innerText = "";
    }

    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    mensaje.classList.remove("error-border");
}

function emailIsValid(email) {
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}    
