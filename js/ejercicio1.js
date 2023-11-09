let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

document.write('<h1 class = "fs-1"> Lista de meses </h1>')
for(let i = 0; i < 12 ; i++)
{
    document.write('<div class="text-black fs-5">')
    document.write("<li>" + meses[i] + "</li>");
    document.write("</div>");
}