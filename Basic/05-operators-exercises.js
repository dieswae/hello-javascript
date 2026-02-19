/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética
let a = 20
let b = 40

let suma = a + b
let resta = a - b
let multiplicar = a * b
let division = a / b
let modulo = a % b
let exponecial = a ** b

// incremento
a++
// decremento
b--

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

// let sumaA = a += 2
// let restaA = b -= 5
// let multiplicarA = a *= 5

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

console.log(a < b)
console.log(a <= b)
console.log(a == 21);
console.log(a != b)
console.log(b > a)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log(a === b)
console.log(a >= b)
console.log(!(a < b));
console.log(b != b)
console.log(b < a)

// 5. Utiliza el operador lógico and

console.log(24 > 10 && 10 < 100)

// 6. Utiliza el operador lógico or

console.log(15 > 20 || 56 > 52)

// 7. Combina ambos operadores lógicos

console.log(7 > 4 && 15 > 17 || 100 === 100)

// 8. Añade alguna negación

console.log(!(7 > 4 && 15 > 17 || 100 === 100))

// 9. Utiliza el operador ternario

const isOlder = true
isOlder ? console.log('Eres mayor de edad!') : console.log('Eres aun muy joven')


// 10. Combina operadores aritméticos, de comparáción y lógicas

console.log(5 + 7 > 5 + 5 && 8 + 3 < 2 - 1 || 22 + 55 > 40 + 20)
