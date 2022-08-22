/*

4- Escriba un script que muestre la tabla de multiplicar de un número ingresado
por pantalla, la creación de la tabla debe ser realizada con una función y mostrar
solo los resultados del 1 al 10 del número elegido por el usuario.

*/

let numeroUsuario = parseInt(prompt("Ingrese un numero para la tabla"));

const tabla = function(num) {
    for (let i = 1; i < 11; i++) {
        let resultado = (num * i);
        document.write(`${num} x ${i} = ${resultado}`);
        document.write("<br>");
    }
}
tabla(numeroUsuario);