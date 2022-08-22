/*

2- Crear un script que solicite al usuario mediante un prompt el nombre de
ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se
debe mostrar el arreglo generado, luego realizar las siguientes acciones:
    ● Mostrar la longitud del arreglo.
    ● Mostrar en el documento web los ítems de las posiciones primera, tercera y
    última.
    ● Añade en última posición la ciudad de París.
    ● Escribe por pantalla el elemento que ocupa la segunda posición.
    ● Sustituye el elemento que ocupa la segunda posición por la ciudad de
'Barcelona'.


*/

let ciudades = [];

while (confirm("Desea agregar el nombre de una ciudad?")) {
  let ciudadUsuario = prompt("Ingrese el nombre de una ciudad: ");
  ciudades.push(ciudadUsuario);
}

// Mostramos la lista de ciudades ingresadas
document.write("La lista de la ciudades ingresadas es: ")
document.write("<br>")
for (let i = 0; i < ciudades.length; i++) {
  document.write(`#  ${ciudades[i]}`);
  document.write("<br>");
}


// Mostramos la longitud de la lista
document.write("<br>");
console.log("");
document.write(`La longitud de la lista es: ${ciudades.length}`);
document.write("<br>");


// Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
document.write("<br>");
document.write("Los ítems de las posiciones primera, tercera y última de la lista es: ")
document.write("<br>");
for (let j = 0; j < ciudades.length; j++) {
  if(j===0 || j === 2 || j === (ciudades.length-1) ) {
    document.write(`# ${ciudades[j]}`);
    document.write("<br>");
  }
  
}
document.write("<br>");

//  Añade en última posición la ciudad de París.
document.write("<br>");
console.log("");
document.write(`Añadimos en la ultima posicion de nuestra lista, la ciudad "Paris" `);
document.write("<br>");
ciudades.push("Paris");

for (let k = 0; k < ciudades.length; k++) {
  document.write(`#  ${ciudades[k]}`);
  document.write("<br>");
  
}

document.write("<br>");


// El elemnto que se encuentra en la segunda posicion 
document.write("<br>");
document.write("El elemento que se encuentra en la segunda posicion es: : ")
document.write("<br>");
document.write(`#  ${ciudades[1]}`);
document.write("<br>");


// Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
document.write("<br>");
document.write(" Se sustituye el elemento de la segunda posicion por la ciudad 'Barcelona' ");
ciudades[1]="Barcelona";
document.write("<br>");
document.write("La nueva lista es: ");
document.write("<br>");
for (let index = 0; index < ciudades.length; index++) {
  document.write(`#  ${ciudades[index]}`);
  document.write("<br>");
  
}

