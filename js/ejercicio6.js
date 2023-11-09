function calcularPerimetro(longitud, ancho) {
    return 2 * (parseFloat(longitud) + parseFloat(ancho));
}

let longitud = prompt("Ingrese la longitud del rectángulo:");
let ancho = prompt("Ingrese el ancho del rectángulo:");

let perimetro = calcularPerimetro(longitud, ancho);

document.write("El perímetro del rectángulo es: " + perimetro);