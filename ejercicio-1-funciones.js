/*

1- Escribir el código de una función a la que se pasa como parámetro un número
entero y devuelve como resultado una cadena de texto que indica si el número es
par o impar. Mostrar por pantalla el resultado devuelto por la función.


*/

let numeroUsuario = parseInt(prompt("Ingrese un numero para determinar si es PAR o IMPAR:"));

function parOImpar(numero) {
    if (!isNaN(numero)) {
        if (numero === 0) {
            document.write("El numero ingresado cero(0) no es PAR ni IMPAR;")
        } else if (numero % 2 === 0) {
            document.write("El numero es PAR");
        } else {
            document.write("El numero es IMPAR");
        }
    } else {
        document.write("El dato ingresado no es un numero. Reinicie e intente nuevamnete");
    }
    
    
}

parOImpar(numeroUsuario);