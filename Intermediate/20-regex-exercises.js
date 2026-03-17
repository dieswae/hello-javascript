/*
Clase 79 - Regex
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=25888
*/

// 1. Crea una RegEx que valide correos electrónicos

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

console.log(emailRegex.test("user@example.com")) // true
console.log(emailRegex.test("invalid.email")) // false


// 2. Crea una RegEx obtenga Hashtags de un Texto

const hashtagRegex = /#\w+/g
const text = "Me encanta #JavaScript y #regex"
const hashtags = text.match(hashtagRegex)
console.log(hashtags) // ["#JavaScript", "#regex"]

// 3. Crea una RegEx que valide contraseñas seguras (mínimo 8 caracteres, al menos una letra y un número)

const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

console.log(passwordRegex.test("Password1")) // true
console.log(passwordRegex.test("password")) // false
console.log(passwordRegex.test("12345678")) // false
console.log(passwordRegex.test("Pass1")) // false

// NOTA: Aplícalas utilizando diferentes operaciones