/*
Clase 23 - Estructuras avanzadas
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=7514
*/

// 1. Utiliza map, filter y reduce para crear un ejemplo diferente al de la lección

let numbers = [15, 2, 3, 40, 52, 6, 100]

let result = numbers
  .filter(num => num > 10)
  .map(num => num * 2)
  .reduce((acc, num) => acc + num, 0)

console.log(result)


// 2. Dado un array de números, crea uno nuevo con dichos números elevados al cubo y filtra sólo los números pares

let numbers2 = [1, 2, 3, 4, 5, 6]

let cubedEvens = numbers2
  .map(num => num ** 3)
  .filter(num => num % 2 === 0)

console.log(cubedEvens)


// 3. Utiliza flat y flatMap para crear un ejemplo diferente al de la lección

let nestedArrays = [[1, 2], [3, 4], [5, 6]]

// console.log(nestedArrays.flat())

console.log(nestedArrays.flatMap(arr => arr.map(num => num * 2)))

// 4. Ordena un array de números de mayor a menor

let unsorted = [3, 4, 1, 6, 10]

let sorted = unsorted.sort((a, b) => b - a)

console.log(sorted)

// 5. Dados dos sets, encuentra la unión, intersección y diferencia de ellos

let setA = new Set([1, 2, 3, 4])
let setB = new Set([3, 4, 5, 6])
let union = new Set([...setA, ...setB])
let intersection = new Set([...setA].filter(element => setB.has(element)))
let difference = new Set([...setA].filter(element => !setB.has(element)))

console.log(union)
console.log(intersection)
console.log(difference)

// 6. Itera los resultados del ejercicio anterior

union.forEach(value => console.log(value))
intersection.forEach(value => console.log(value * 2)) 
difference.forEach(value => console.log(value)) 

// 7. Crea un mapa que almacene información de usuarios (nombre, edad y email) e itera los datos

let mapUsers = new Map([
  ['user1', { name: 'Diego', age: 23, email: 'diego@elmaspro.com' }],
  ['user2', { name: 'Mariale', age: 22, email: 'mariale@elmaspro.com' }]
])

for (let [key, value] of mapUsers) {
  console.log(`Nombre: ${value.name}, Edad: ${value.age}, Email: ${value.email}`)
}

// 8. Dado el mapa anterior, crea un array con los nombres

let names = []

mapUsers.forEach((value) => {
  names.push(value.name)
})

console.log(names)

// 9. Dado el mapa anterior, obtén un array con los email de los usuarios mayores de edad y transfórmalo a un set

let emails = []

mapUsers.forEach((value) => {
  if (value.age >= 18) {
    emails.push(value.email)
  }
})

let emailSet = new Set(emails)
console.log(emailSet)

// 10. Transforma el mapa en un objeto, a continuación, transforma el objeto en un mapa con clave el email de cada usuario y como valor todos los datos del usuario

let objUsers = Object.fromEntries(mapUsers)

let mapFromObj = new Map(
  Object.values(objUsers).map(user => [user.email, user])
)

console.log(mapFromObj)
