/*
Clase 41 - Ejercicios: Manejo de errores
Vídeo: https://youtu.be/1glVfFxj8a4?t=20392
*/

// 1. Captura una excepción utilizando try-catch

let myObject

try {
  console.log(myObject.name)
} catch (error) {
  console.log("Se ah producido un error: ", error.message)
}

// 2. Captura una excepción utilizando try-catch y finally

try {
  console.log(myObject.name)
} catch (error) {
  console.log("Se ah producido un error: ", error.message)
} finally {
  console.log('este codigo se ejecuta siempre');
  
}

// 3. Lanza una excepción genérica

// throw new Error("Se ah producido un error")

// 4. Crea una excepción personalizada

class ErrorHandling extends Error {
  constructor(message, name) {
    super(message)
    this.name = name
  }
}

// 5. Lanza una excepción personalizada

try {
  throw new ErrorHandling("Este es un excepcion personalizada", "Excepcion Personalizada")
} catch (error) {
  console.log('se ah producido un error personalizado: ', error.message, error.name);
  
}

// 6. Lanza varias excepciones según una lógica definida

const passwordValid = (pass) => {
  if (!pass) {
    throw new Error("Tu contraseña no puede estar vacia")
  }
  if (pass.length < 6) {
    throw new Error("Tu contraseña tiene que tener mas de 6 digitos")
  }
  if (!/\d/.test(pass)) {
    throw new Error("Tu contraseña tiene que tener al menos 1 o mas numeros")
  }
  return "Contraseña valida!"
}

try {
  console.log(passwordValid(""))
} catch (error){
  console.log('se ah producido un error: ', error.message);
  
}
 
// 7. Captura varias excepciones en un mismo try-catch

function pruductOfIntegers(a, b) {
  if(typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("Esta operacion solo suma numeros")
  }

  if(!Number.isInteger(a) || !Number.isInteger(b)){
    throw new Error('esta operacion solo suma numeros enteros')
  }
  
  if(a == 0 || b == 0) {
    throw new ErrorHandling('el numero no puede ser cero o negativo', 'ZeroOrNegativeError')
  }

  return a * b
}

try {
  console.log(pruductOfIntegers(5, 5))
} catch (error) {
  if(error instanceof TypeError) {
    console.log('Error de tipo:', error.message)
  } else if(error instanceof ErrorHandling) {
    console.log('Ah ocurrido un error personalizado: ', error.message)
  } else {
    console.log('Error general: ', error.message);
  }
}

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores

let values = [15, "25.5", true, "40px", 33]

for ( let val of values ) {
  try {

    let float = Number(val)

    if(Number.isNaN(float)) {
      throw new Error('No se puede transformar')
    }

    console.log('convertido: ', float)
  }  
  catch (error) {
    console.log('se ah producido un error: ', error.message)
  }
}


// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada

let user = {
  name: "Diego",
  age: 23,
  email: "diego@email.com"
}

class PropertyError extends Error {
  constructor(message) {
    super(message)
    this.name = "PropertyError"
  }
}

function propertyVerify(obj, prop) {
  if(!(prop in obj)) {
    throw new PropertyError(`La propiedad ${prop} no existe en el objeto`)
  }

  return `la propiedad ${prop} si existe en el objeto`
}

try {
  console.log(propertyVerify(user, "password"))
} catch (error) {
  if (error instanceof PropertyError) {
    console.log('error personalizado: ', error.message);
  } else {
    console.log('otro error', error.message);
  }
}



// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10

function unstableFunction() {
  if (Math.random() < 0.7) {
    throw new Error("Falló")
  }
  return "Funcionó"
}


function retry (fn) {
  for(let i = 1; i <= 10; i++) {
    try {
      return fn()
    } catch (error) {
      console.log('intento fallido: ', i);
      
      if(i === 10) {
        throw new Error('Numero maximo de intentos alcanzados')
      }
    }
  }
}

console.log(retry(unstableFunction))