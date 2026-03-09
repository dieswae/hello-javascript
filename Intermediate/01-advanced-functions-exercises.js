/*
Clase 12 - Funciones avanzadas
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=4112
*/

function mult(...numbers) {
    let result = 1
    for (let number of numbers) {
        result *= number
    }
    return result
}

// 1. Crea una función que retorne a otra función

function createGreeter(greeting) {
    return function (name) {
        console.log(`${greeting}, ${name}`)
    }
}

let greetWelcome = createGreeter('Hi! Welcome')
greetWelcome('Diego')

// 2. Implementa una función currificada que multiplique 3 números



function multiply(a) {
    return function (b) {
        return function (c) {
            return mult(a, b, c)
        }
    }
}

let multAB = multiply(5)(10)
console.log(multAB(2))

// 3. Desarrolla una función recursiva que calcule la potencia de un número elevado a un exponente

function elevate (num, exp) {
    if (exp === 0) {
        return 1
    }
    return num * elevate(num, exp - 1)
}

console.log(elevate(5, 5))

// 4. Crea una función createCounter() que reciba un valor inicial y retorne un objeto con métodos para increment(), decrement() y getValue(), utilizando un closure para mantener el estado

function createCounter (valInicial) {
    let count = valInicial

    return {
        increment() {
            count++
        },
        decrement() {
            count--
        },
        getValue() {
            return count
        }
    }
}

let counter = createCounter(100)
counter.increment()
counter.increment()
console.log(counter.getValue())
counter.decrement()
console.log(counter.getValue())

// 5. Crea una función sumManyTimes(multiplier, ...numbers) que primero sume todos los números (usando parámetros Rest) y luego multiplique el resultado por multiplier

function sumManyTimes(multiplier, ...numbers) {
    let sum = 0
    for (let number of numbers) {
        sum += number
    }
    return sum * multiplier
}

console.log(sumManyTimes(2, 1, 2, 3, 4, 5, 10))
// 6. Crea un Callback que se invoque con el resultado de la suma de todos los números que se le pasan a una función

function sumWithCallback(callback, ...numbers) {
    let sum = 0
    for (let number of numbers) {
        sum += number
    }
    callback(sum)
}

function printResult(result) {
    console.log(`El resultado de la suma es: ${result}`)
}

sumWithCallback(printResult, 1, 2, 3, 4, 5)
// 7. Desarrolla una función parcial

function partialSum(a) {
    return function (b, c) {
        return a + b + c
    }
}

const sumWith5 = partialSum(5)
console.log(sumWith5(10, 15))

// 8. Implementa un ejemplo que haga uso de Spread

let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]

const multWithSpread = (a, b, c) => mult(a, b, c)

console.log(multWithSpread(...arr1))
console.log(multWithSpread(...arr2))

// 9. Implementa un retorno implícito

/* lo hice arriba mismo */

// 10. Haz uso del this léxico

const person = {
    name: "Mariale",
    age: 22,
    greet: function() {
        console.log(`Mi nombre es ${this.name} y tengo ${this.age} años`);
    }
}

person.greet()