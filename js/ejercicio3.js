function lanzarDado() {
    return Math.floor(Math.random() * 6) + 1;
  }
  
function simularLanzamientos() {
    let resultados = Array(11).fill(0); 
  
    for (let i = 0; i < 50; i++) {
      let dado1 = lanzarDado();
      let dado2 = lanzarDado();
      let suma = dado1 + dado2;
      resultados[suma - 2]++;
    }
  
    return resultados; // La función devuelve el array con los resultados
  }
  
let resultadosSimulacion = simularLanzamientos();
  
document.write('<table class="table table-bordered w-50"> <thead> <tr> <th scope="col">Sumas</th> <th scope="col">Apariciones</th>  </tr> </thead> <tbody>');
for(let i = 0; i < 11; i++){
    document.write('<tr>');
    document.write(`<td>${i+2}</td>`);
    document.write(`<td>${resultadosSimulacion[i]}</td>`);
    document.write('</tr>');
}

document.write('</tbody> </table>');
  