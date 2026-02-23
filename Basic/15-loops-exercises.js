/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
let a = 1
while (a <= 20) {
  console.log(a)
  a++
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

let sum = 0
for (let i = 0; i <= 100; i++) {
  sum += i
}
console.log(sum)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
let names = ["mariale", "diego", "ginny", "missy"]

for (const values of names) {
  console.log(values)  
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

let myString = "camaron que se duerme"
let count = 0

myString.toLowerCase()
for (const letter of myString) {
  if ("aeiou".includes(letter)) {
    count ++
  }
}
console.log(count)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

let nums = [4, 6, 4, 10]
let multipler = 1
for (const value of nums) {
  multipler *= value 
}
console.log(multipler)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5


for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`)
}

// 8. Usa un bucle para invertir una cadena de texto

let username = "diklaus"
let invert = ""

for(let i = username.length - 1; i >= 0; i--) {
  invert += username[i]
}

console.log(invert)

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

let c = 0
let d = 1

console.log(c)
console.log(d)

for(let i = 0; i < 8; i++) {
  let siguiente = c + d
  console.log(siguiente)
  c = d
  d = siguiente
}

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

let array10 = [4, 14, 100, 24, 6, 2, 20]

let mayor = []

for (let num of array10) {
  if (num > 10) {
    mayor.push(num)
  }
}

console.log(mayor)
