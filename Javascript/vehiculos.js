function contar() {
    n = 0;
    lista = document.selector.autos
    for (i = 0; i < lista.options.lenghth; i++) {
        if (lista.options[i].selected) {
            document.write("<br>" + lista.options[i].innerHTML)
            n++
        }
    }
    document.write("<br> Seleccionaste las marcas: " + n + "favoritas")
}

const vehiculos = [
    {
        "modelo": "peugeot 208",
        "produccion": 2021,
        "kilometros": 8000
    },
    {
        "modelo": "ford ka",
        "produccion": 2022,
        "kilometros": 1000
    },
    {
        "modelo": "chevrolet cruze",
        "produccion": 2020,
        "kilometros": 18000
    },
    {
        "modelo": "volkswagen golf",
        "produccion": 2022,
        "kilometros": 0
    },
    {
        "modelo": "renault alaskan",
        "produccion": 2022,
        "kilometros": 3000
    }
];

JSON.stringify(vehiculos)
console.log(JSON.stringify(vehiculos))

fetch("./vehiculos.json")
    .then(Response => Response.json())
    .then(data => {
        console.log(data)
    })