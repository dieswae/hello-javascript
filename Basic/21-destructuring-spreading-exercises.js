/*
Clase 36 - Ejercicios: Desestructuración y propagación
Vídeo: https://youtu.be/1glVfFxj8a4?t=16802
*/

let myArray = [1, 2, 3, 4]

let person = {
    name: "Diego",
    age: 23,
    alias: "Diklaus"
}

// 1. Usa desestructuración para extraer los dos primeros elementos de un array 

let [myValue1, myValue2] = myArray

console.log(myValue1, myValue2);

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable

let [myValue3, myValue4, myValue5, myValue6, myValue7 = 0] = myArray

console.log(myValue3, myValue4, myValue5, myValue6, myValue7)

// 3. Usa desestructuración para extraer dos propiedades de un objeto

let {name, age, alias} = person
console.log(name, age, alias)

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes

let {name: name2, age: age2, alias: alias2} = person

console.log(name2, age2, alias2);


// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado

let person3 = {
  name: "Diego",
  username: "Diklaus",
  age: 23,
  hobbys: {
    gaming: "pc",
    watch: "movies",
    listening: "rock"
  },
  job: {
    work: "programmer"
  }
}

let { hobbys: {gaming: hobbyName}, job: {work: jobName} } = person3

console.log(hobbyName, jobName)

// 6. Usa propagación para combinar dos arrays en uno nuevo

let myArray2 = [1, 2, 3, 4]
let myArray3 = [5, 6, 7, 8]

let myArray4 = [...myArray2, ...myArray3]

console.log(myArray4)

// 7. Usa propagación para crear una copia de un array

let myArrayCopy = [...myArray2]

console.log(myArrayCopy)

// 8. Usa propagación para combinar dos objetos en uno nuevo
let person2 = {
    name: "Diego",
    age: 23,
    alias: "Diklaus"
}

let job = {
  jobName: "Developer",
  experience: "6 years",
  area: "FullStack"
}

let hobbies = {
  play: "videogames"
}

let fullDataPerson = {...person2, job: {...job} }

console.log(fullDataPerson)

// 9. Usa propagación para crear una copia de un objeto

let fullDataPerson2 = {...fullDataPerson }

console.log(fullDataPerson2)

// 10. Combina desestructuración y propagación

let {name: name3, ...rest } = person2

let newPerson = {
  name3,
  ...rest
}

console.log(newPerson)