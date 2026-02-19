/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let isDiego = false

const Name = isDiego ? "Hola Diego!" : "Tu no eres Diego"
console.log(Name)

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let user = "dieswae"
let password = "Michoco123"

if (user === "dieswae" && password === "michoco123") {
  console.log("Haz ingresado correctamente!")
} else {
  console.log("Ingresaste un dato mal, intentalo de nuevo..")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let number = 0

if (number > 0) {
  console.log('Es positivo!');
} else if (number < 0) {
  console.log('Es negativo!')
} else {
  console.log('El numero es 0');
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let age = 14

if (age >= 18) {
  console.log('Felicidades, puedes votar!');
  
} else {
  console.log(`Años que faltan para votar = ${18 - age} `);
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad

const AgeVerify = age >= 18 ? "Adulto" : "Menor"
console.log(AgeVerify)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let month = "Febrero"

if (month === "Marzo" || month === "Abril" || month === "Mayo") {
  console.log('Es Primavera!');

} else if (month === "Junio" || month === "Julio" || month === "Agosto") {
  console.log('Es Verano!');

} else if (month === "Septiembre" || month === "Octubre" || month === "Noviembre") {
  console.log('Estamos en Otoño!');

} else if (month === "Diciembre" || month === "Enero" || month === "Febrero") {
  console.log('Es invierno!');
  
} else {
  console.log('ingrese un mes correcto');
  
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

if (month === "Enero" || month === "Marzo" || month === "Mayo" || month === "Julio" || month === "Agosto" || month === "Octubre" || month === "Diciembre") {
    console.log('Este mes tiene 31 días');
  
} else if (month === "Abril" || month === "Junio" || month === "Septiembre" || month === "Noviembre") {
    console.log('Este mes tiene 30 días');

} else if (month === "Febrero") {
    console.log('Este mes tiene 28 dias y años bisiestos 29!');

} else {
    console.log('ingresa un mes correcto');
  
}

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let lenguage = "Mandarin"

switch (lenguage) {
  case "Spanish":
    console.log('Hola! esto es Español');
    break;
  case "English":
    console.log('Hi! this is English');
    break
  case "Japanese":
    console.log('こんにちは！これは日本語です');
    break
  case "Mandarin":
    console.log('你好！這裡是國語');
    break
  default:
    console.log('Idioma no detectado');
    
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6

switch (month) {
  case "Marzo":
  case "Abril":
  case "Mayo":
    console.log('Primavera');
    break
  case "Junio":
  case "Julio":
  case "Agosto":
    console.log('Verano');
    break
  case "Septiembre":
  case "Octubre":
  case "Noviembre":
    console.log('Otoño');
    break
  case "Diciembre":
  case "Enero":
  case "Febrero":
    console.log('Invierno');
    break
  default: 
    console.log('Mes no valido');
        
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7

switch (month) {
  case "Enero":
  case "Marzo":
  case "Julio":
  case "Agosto":
  case "Octubre":
  case "Diciembre":
    console.log('estos meses tienen 31 días');
    break
  case "Abril":
  case "Junio":
  case "Septiembre":
  case "Noviembre":
    console.log('estos meses tienen 30 días');
    break
  case "Febrero":
    console.log('Este mes tiene 28 dias y años bisiestos 29!');
    break
  default:
    console.log('Ingrese un mes valido');
    
}
