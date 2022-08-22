/*

3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la
función Math.random para obtener números aleatorios entre 1 y 6 para cada uno
de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y
anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces
esta operación.

*/


// Lista para almacenar los resultados de la suma de los 2 dados
let resultados = [];


// Simular el tiro de dados y realizar la suma en cada tiro (50 veces)
for (let i = 0; i < 51; i++) {
  let dado1 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
  let dado2 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
  document.write(`Dado Uno:  ${dado1}`);
  document.write("<br>");
  document.write(`Dado Dos:  ${dado2}`);
  document.write("<br>");
  let sumaDado = dado1 + dado2;
  document.write(`La suma de ambos dados es: ${sumaDado}`);

  // Agregamos la suma de dados en una lista
  resultados.push(sumaDado);
  document.write("<br>");
  document.write("<br>");
}

document.write("<br>");
document.write("<br>");


// Mostramos los resultados de las sumas
for (let j = 0; j < resultados.length; j++) {
    document.write(resultados[j]);
    document.write("<br>");
}
