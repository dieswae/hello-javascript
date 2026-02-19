/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea

//este es un comentario de una linea

// 2. Escribe un comentario en varias líneas

/*
este es
un comentario 
de varias
lineas 
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let myString = "Diego"
let myNumber = 10
let myBool = true
let myNull = null
let myUndefined
let mySymbol = Symbol("a Symbol")
let myBigInt = BigInt(2931238129312319231823123912)

// 4. Imprime por consola el valor de todas las variables

console.log(myString, myNumber, myBool, myNull, myUndefined, mySymbol, myBigInt)

// 5. Imprime por consola el tipo de todas las variables

console.log(typeof myString, typeof myNumber, typeof myBool, typeof myNull, typeof myUndefined, typeof mySymbol, typeof myBigInt)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

myString = "Mariale"
myNumber = 30
// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

mySymbol = true
myBigInt = "Ahora soy un String"
console.log(mySymbol, myBigInt)

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const String = "Soy un String"
const Number = 24
const Boolean = false

// 9. A continuación, modifica los valores de las constantes

// String = "Cambie en una constante"
// Number = 30
// Boolean = true

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse