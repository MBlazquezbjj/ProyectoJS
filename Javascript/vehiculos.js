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