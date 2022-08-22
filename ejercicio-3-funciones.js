/*

3- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo,
luego crear una función para calcular su perímetro y mostrarlo por pantalla.
● La fórmula del perímetro es p = 2*(a +b)

*/


let baseRectangulo = parseFloat(prompt("Ingrese el valor de la base del rectangulo"));
let alturaRectangulo = parseFloat(prompt("Ingrese la altura del rectangulo"));

const calcularPerimetro = function(a,b) {
    let perimetro = 2*(a+b);
    return perimetro;
}

document.write(`El perimetro del ractangulo es de ${calcularPerimetro(baseRectangulo,alturaRectangulo)} cm`);