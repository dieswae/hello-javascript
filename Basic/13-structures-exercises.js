/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales

let animals = ["fox", "serpent", "dragon", "unicorn", "lion"]

console.log(animals);


// 2. Añade dos más. Uno al principio y otro al final

animals.push("shark")
console.log(animals)
animals.unshift("cat")
console.log(animals);

// 3. Elimina el que se encuentra en tercera posición

animals.splice(2, 1)
console.log(animals)

// 4. Crea un set que almacene cinco libros

let myBooks = new Set (["cumbres borrascosas", "pinocho", "mobydick", "got", "js eloquent"])

// 5. Añade dos más. Uno de ellos repetido

myBooks.add("agatha christie")
myBooks.add("got")
console.log(myBooks)

// 6. Elimina uno concreto a tu elección

myBooks.delete("agatha christie")
console.log(myBooks);


// 7. Crea un mapa que asocie el número del mes a su nombre

let months = new Map([
  [1, "Enero"],
  [2, "Febrero"],
  [3, "Marzo"],
  [4, "Abril"],
  [5, "Mayo"]
])

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

console.log(months.has(5))
console.log(months.get(5))

// 9. Añade al mapa una clave con un array que almacene los meses de verano

months.set("Summer", ["Febrero, Marzo, Abril"])
console.log(months)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let myArray = ["mariale", "diego", "ginny", "missy"]

let mySet = new Set(myArray)

let myMap = new Map([["family", mySet]])

console.log(myArray)
console.log(mySet)
console.log(myMap)