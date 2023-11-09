/*Escriba un script que muestre la tabla de multiplicar de un número ingresado
por pantalla, la creación de la tabla debe ser realizada con una función y mostrar
solo los resultados del 1 al 10 del número elegido por el usuario*/
function tablaDeMultiplicar(numero){
    document.write('<table class="table table-bordered w-50"> <thead> <tr> <th scope="col" class="text-center">x</th> <th scope="col" class="text-center">' + numero + '</th>  </tr> </thead> <tbody>');
    for (let i = 1; i <= 10 ; i++)
    {
        document.write('<tr class = "text-center" >');
        document.write(`<td> ${i} </td> `);
        document.write(`<td> ${i * numero} </td> `);
        document.write("</tr>");
    }
    
    document.write('</tbody> </table>');
}


let numero = parseInt(prompt("Ingrese un número: "));

tablaDeMultiplicar(numero);