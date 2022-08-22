/*

2- Definir una función que muestre información sobre una cadena de texto que se
le pasa como argumento. A partir de la cadena que se le pasa, la función
determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o
por una mezcla de ambas.

*/

let texto = prompt('Ingrese un texto')

function mayusculasOMinusculas(cadena) {

  if (!isNaN(cadena)) {
    return ('No se puede ingrear numeros')
  } else if (cadena === cadena.toLowerCase()) {
    return ('El texto esta en Minusculas')
  } else if (cadena === cadena.toUpperCase()) {
    return ('El texto esta en Mayusculas')
  }
  else {
    return ('El texto contiene Mayusculas y Minusculas')
  }
}

document.write(mayusculasOMinusculas(texto));