function convertir() {
    var valore = parseInt(document.getElementById("valor").value);
    var resultado = 0;
    var dolar = 285;
    var euro = 290;
    if (document.getElementById("uno").checked) {
        resultado = valore / dolar;
        swal("El cambio de pesos a", "Dolares es:$" + resultado.toFixed(2), "success");
    }
    else if (document.getElementById("dos").checked) {
        resultado = valore / euro;
        swal("El cambio de pesos a", "Euros es: " + resultado.toFixed(2), "success");
    }
    else {
        swal("Completa todos los", "requerimientos", "error")
    }
}

let postsElements = String

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(Response => {
        return Response.json()
    })
    .then(data => {
        for (let i = 0; i < data.lenght; i++) {
            console.log(data)
            postsElements += "<li>${data[i].userId} - ${data[i].title}</li>"
        }
    })
document.getElementById("posts").innerHTML = postsElements 
