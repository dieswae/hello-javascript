/*
Clase 34 - Ejercicios: Objetos
Vídeo: https://youtu.be/1glVfFxj8a4?t=15675
*/

// 1. Crea un objeto con 3 propiedades

let person = {
  name: "Diego",
  username: "Diklaus",
  age: 23
}

// 2. Accede y muestra su valor

console.log(person)

// 3. Agrega una nueva propiedad

person.hobby = "Gaming"

// 4. Elimina una de las 3 primeras propiedades

delete person.username

console.log(person)

// 5. Agrega una función e invócala

person.work = function () {
  console.log(`el sr ${this.name} trabaja en desarrollo web`);
}

person.work()


// 6. Itera las propiedades del objeto

for (let key in person) {
  console.log(`${key}: ${person[key]}`)
}

// 7. Crea un objeto anidado

let person2 = {
  name: "Diego",
  username: "Diklaus",
  age: 23,
  hobbys: {
    gaming: "pc",
    watch: "movies",
    listening: "rock"
  }
}

let person3 = {
  name: "Diego",
  username: "Diklaus",
  age: 23,
  hobbys: {
    gaming: "pc",
    watch: "movies",
    listening: "rock"
  }
}

// 8. Accede y muestra el valor de las propiedades anidadas

console.log(person2.hobbys.gaming)

// 9. Comprueba si los dos objetos creados son iguales

console.log(person2 === person3)

// 10. Comprueba si dos propiedades diferentes son iguales

console.log(person2.name === person3.username)