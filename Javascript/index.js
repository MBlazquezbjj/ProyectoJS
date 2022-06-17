function convertir() {
    var valore = parseInt(document.getElementById("valor").value);
    var resultado = 0;
    var dolar = 222;
    var euro = 242;
    if (document.getElementById("uno").checked) {
        resultado = valore / dolar;
        alert("El cambio de pesos a Dolares es: $" + resultado.toFixed(2));
    }
    else if (document.getElementById("dos").checked) {
        resultado = valore / euro;
        alert("El cambio de pesos a Euros es: " + resultado.toFixed(2));
    }
    else {
        alert("Completa todos los requerimientos")
    }
}

