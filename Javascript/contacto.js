const formulario = document.getElementById("form")

formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    let mail = document.getElementById("email-form").value;
    console.log(mail)
})

const checkbox = document.getElementById("activador")

checkbox.addEventListener("change", function (e) {
    console.log(e)
    if (e.target.checked) {
        console.log("SOLICITUD ACEPTADA")
    }
    else {
        console.log("ACTIVE LA SOLICITUD")
    }
})
