/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto

console.log('Hola soy ' + 'Diego')

// 2. Muestra la longitud de una cadena de texto

let nombre = "Reptiliano"
console.log(nombre.length)

// 3. Muestra el primer y último carácter de un string

console.log(nombre[0])
console.log(nombre[9])

// 4. Convierte a mayúsculas y minúsculas un string

console.log(nombre.toUpperCase())
console.log(nombre.toLowerCase())

// 5. Crea una cadena de texto en varias líneas

let greeting = `hello world
good to
see you all!`

// 6. Interpola el valor de una variable en un string
let age = 24
console.log(`Mi nombre es Diego y tengo ${age} años`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones

let robot = "el robot se llama atom"
console.log(robot.replaceAll(" ", "-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta

console.log(robot.includes("atom"))

// 9. Comprueba si dos strings son iguales

let nombre2 = "Homosapien"

console.log(nombre == nombre2)

// 10. Comprueba si dos strings tienen la misma longitud

console.log(nombre.length === nombre2.length)