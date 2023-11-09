function paridad(numero)
{
    if((number % 2) === 0){ document.write("El número "+ number +" es par. ")} 
    else{document.write("El número "+ number +" es impar. ")}
}

let number = parseInt(prompt("Ingrese un número: "));

paridad(number);