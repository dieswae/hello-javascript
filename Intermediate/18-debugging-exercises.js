/*
Clases 74 - Depuración
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=24329
*/

// 1. Crea un código con un error lógico y usa VS Code para encontrarlo

function calcularPromedio(numeros) {
    let suma = 0
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i]
    }
    return suma / numeros.length
}

console.log(calcularPromedio([10, 20, 30, 40]))

function esMayorDeEdad(edad) {
    if (edad > 18) {
        return true
    }
    return false
}

console.log(esMayorDeEdad(18))


// 2. Experimenta con breakpoints y observa cómo cambia el flujo de ejecución
