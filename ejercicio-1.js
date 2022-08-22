/*

1- Crear un array llamado meses y que almacene el nombre de los doce meses del
año. Mostrar por pantalla en forma de lista los doce nombres del arreglo.

*/

let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];


function listaMeses(array) {
    for (let i = 0; i < array.length; i++) {
        document.write(meses[i]);
        document.write("<br>");

    }

}

listaMeses(meses);