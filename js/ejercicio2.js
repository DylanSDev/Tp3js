let ciudades = [];
let ciudad = "";

while(ciudad != null){
    
    ciudad = prompt("Ingrese el nombre de una ciudad (o seleccione Cancelar para finalizar):");

    if (ciudad != null) {
        ciudades.push(ciudad);
    }
}

if(ciudades.length > 0)
{
    document.write('<h1 class = "fs-1"> Ciudades Ingresadas </h1>')
    for(let i = 0; i < ciudades.length ; i++)
    {
        document.write("<li>" + ciudades[i] + "</li>");
    }
}

document.write(`[+] El arreglo tiene ${ciudades.length} ciudades. <br> `);
document.write("[+] Elemento 1ra posición: " + ciudades[0] + "<br>");
document.write(`[+] Elemento 3da posición: ${ciudades[2]} <br>`);
document.write(`[+] Elemento en la ultima posición:  ${ciudades[ciudades.length-1]} <br> <br>`);

ciudades.push("Paris");
document.write(`[+] Elemento en la ultima posición:  ${ciudades[ciudades.length-1]} <br> <br>`);

document.write(`[+] Elemento en la 2da posición:  ${ciudades[1]} <br>`);
ciudades.splice(1, 1, "Barcelona");
document.write(`[+] Elemento en la 2da posición:  ${ciudades[1]} <br>  `);