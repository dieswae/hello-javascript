/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

function sum(a, b) {
  console.log(a + b)
  return
}

sum(5, 10)

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

let nums = [4, 10, 35, 5, 104, 52]

function mayor (array) {
  let mayorActual = array[0]
  for(let i = 1; i < array.length; i++) {
    if(array[i] > mayorActual ) {
      mayorActual = array[i]
    }
  }
  return mayorActual
}

console.log(mayor(nums))

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

let stringVocal = "itadori"

function sumVocal (string) {
  let text = string.toLowerCase()
  let count = 0
  for (const letter of text) {
    if ("aeiou".includes(letter)) {
      count++
    }
  }
  return count
}

console.log(sumVocal(stringVocal))


// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

let arrStrings = ["maraca", "mariale", "missy", "ginny"]

function stringToUpper (strings) {
  let uppers = []
  for (let value of strings) {
    let text = value.toUpperCase()
    uppers.push(text)
  }
  return uppers
}

console.log(stringToUpper(arrStrings))

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

function toPrimo (n) {
  if(n <= 1 ) return false

  for (let i = 2; i < n; i++) {
    if(n % i === 0) {
      return false
    }
  }

  return true
}

console.log(toPrimo(5))

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

let array1 = [1, 2, 3, 4]

let array2 = [3, 4, 5, 6]


function comunValue (arr1, arr2) {
  let nuevoarr = []

  for (let value of arr1) {
    if(arr2.includes(value)) {
      nuevoarr.push(value)
    }
  }

  return nuevoarr
}

console.log(comunValue(array1, array2))

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

let array3 = [4, 25, 14, 224, 5, 29, 18]

function sumPars(arr) {
  let count = 0
  for(let value of arr) {
    if(value % 2 === 0) {
      count += value
    }
  }

  return count
}

console.log(sumPars(array3))

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

function toSquare (arr) {
  let nuevoarr = []
  for(let value of arr) {
    nuevoarr.push(value ** 2)
  }
  return nuevoarr
}

console.log(toSquare(array2))

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

let text = "hola mi nombre es diego"

function inverse(str) {
  let toArr = str.split(" ")
  let newarr = []
  for (let i = toArr.length - 1; i >= 0; i--) {
    newarr.push(toArr[i])
  } 
  toArr.join(" ")

  return newarr
}

console.log(inverse(text))

// 10. Crea una función que calcule el factorial de un número dado

const factorial = (num) => {
  if(num === 0) return 1

  let result = 1

  for(let i = 1; i <= num; i ++){
    result *= i
  }

  return result
}

console.log(factorial(5))