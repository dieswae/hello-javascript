/*
Clase 43 - Ejercicios: Console
Vídeo: https://youtu.be/1glVfFxj8a4?t=21421
*/

// 1. Crea un función que utilice error correctamente

function consoleError() {
  console.error('Ah ocurrido un error!')
}

consoleError()

// 2. Crea una función que utilice warn correctamente

function consoleWarn() {
  console.warn('Esta es una advertencia!')

}

consoleWarn()

// 3. Crea una función que utilice info correctamente

function consoleInf() {
  console.info('esta es informacion')
}

consoleInf()

// 4. Utiliza table

let tablexample = [
  {name: 'Diego', age:  23},
  {name: 'Mariale', age: 22}
]

console.table(tablexample)


// 5. Utiliza group

console.group('animals')
console.log('Dragon');
console.log('Serpent');
console.groupEnd()


// 6. Utiliza time

console.time('tiempo de ejecucion');

for(let i = 0; i < 100000000; i++) {

}

console.timeEnd('tiempo de ejecucion');

// 7. Valida con assert si un número es positivo

let num = 4

console.assert(num > 0, 'El numero debe ser positivo!')

// 8. Utiliza count

console.count('check')
console.count('check')
console.count('check')


// 9. Utiliza trace

function funcA() {
    funcB()
}

function funcB() {
    console.trace("Seguimiento de la ejecución.")
}

funcA()

// 10. Utiliza clear

console.clear()