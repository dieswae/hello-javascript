/*
Clase 45 - Asincronía
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=14558
*/

// 1. Crea una función para saludar que reciba un nombre y un callback. 
//    El callback debe ejecutarse después de 2 segundos y mostrar en consola "Hola, [nombre]".

function sayHi(name, callback) {
  setTimeout(() => {
    console.log(`Hola ${name}`);
    callback()
  }, 2000);
}

sayHi('Diego', () => {
  console.log('saludo completado');
  
})

// 2. Crea tres funciones task1(callback), task2(callback) y task3(callback). 
//    Cada función debe tardar 1 segundo en ejecutarse y luego llamar al callback.

function task1(callback) {
  setTimeout(() => {
    console.log('task 1 complete');
    callback()
  }, 1000);
}

function task2(callback) {
  setTimeout(() => {
    console.log('task 2 complete');
    callback()
  }, 1000);
}

function task3(callback) {
  setTimeout(() => {
    console.log('task 3 complete');
    callback()
  }, 1000);
}

task1(() =>{
  task2(() => {
    task3(() => {
      console.log('all tasks complete');
      
    })
  })
})

// 3. Crea una función para verificar un número que retorne una Promesa. 
//    Si el número es par, la promesa se resuelve con el mensaje "Número par". 
//    Si el número es impar, la promesa se rechaza con el mensaje "Número impar".

function verifyNum(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(num % 2 === 0) {
        resolve('Número par')
      } else {
        reject('Número impar')
      }
    }, 4000);
  })
}

verifyNum(9).then(result => {
  console.log(result)
}).catch(error => {
  console.log(error)
})

// 4. Crea tres funciones que devuelvan promesas:
//    firstTask(): tarda 1s y muestra "Primera tarea completada".
//    secondTask(): tarda 2s y muestra "Segunda tarea completada".
//    thirdTask(): tarda 1.5s y muestra "Tercera tarea completada".

function firstTask() {
  return new Promise (resolve => {
    setTimeout(() => {
      console.log('Primera tarea completada')
      resolve()
    }, 1000);
  })
}

function secondTask() {
  return new Promise (resolve => {
    setTimeout(() => {
      console.log('Segunda tarea completada')
      resolve()
    }, 2000);
  })
}

function thirdTask() {
  return new Promise (resolve => {
    setTimeout(() => {
      console.log('Tercera tarea completada')
      resolve()
    }, 1500);
  })
}

firstTask()
  .then(secondTask)
  .then(thirdTask)
  .then(() => {
    console.log('todas las tareas con promesa completadas');
    
  })

// 5. Transforma el ejercicio anterior de Promesas en una función async/await llamada executeTasks().

function wait(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  })
}

async function executeTasks() {
  console.log('Iniciando...')

  await wait(1000)
  console.log('Primera tarea Async completada');
  await wait(2000)
  console.log('Segunda tarea Async completada')
  await wait(1500)
  console.log('Tercera tarea Async completada')
  
}

executeTasks()

// 6. Crea una función getUser(id) que devuelva una promesa y simule una llamada a una API (que se demore 2s).
//    Si el id es menor a 5, la promesa se resuelve con { id, nombre: "Usuario " + id }.
//    Si el id es 5 o mayor, la promesa se rechaza con el mensaje "Usuario no encontrado".
//    Usa async/await para llamar a getUser(id) y maneja los errores con try/catch.

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(id < 5) {
        resolve({id, nombre: `Dieswae ${id}`})
      } else if (id >= 5) {
        reject('Usuario no encontrado')
      }
    }, 2000);
  })
}

async function fetchUser(id) {
  try {
    const user = await getUser(id)
    console.log(user)
  } catch (error) {
    console.log(error)
  }
}

fetchUser(3)
fetchUser(5)

// 7. Intenta predecir el resultado de este código antes de ejecutarlo en la consola:
  //  console.log("Inicio")
  //  setTimeout(() => console.log("setTimeout ejecutado"), 0)
  //  Promise.resolve().then(() => console.log("Promesa resuelta"))
  //  console.log("Fin")

/* 
primero se ejecuta console.log("Inicio"),
luego el console.log("Fin"), 
luego la Promesa y de ultimo el setTimeout  
*/

// 8. Crea tres funciones que devuelvan promesas con tiempos de espera distintos.
//    A continuación, usa Promise.all() para ejecutarlas todas al mismo tiempo y mostrar "Todas las promesas resueltas" cuando terminen.


Promise.all([firstTask(), secondTask(), thirdTask()]).then(() => {
  console.log('Todas las promesas resueltas');
  
})


// 9. Crea una función waitSeconds(segundos) que use setTimeout dentro de una Promesa para esperar la cantidad de segundos indicada.
//    A continuación, usa async/await para que se espere 3 segundos antes de mostrar "Tiempo finalizado" en consola.

function waitSeconds(ms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(ms)
    }, ms);
  })
}

waitSeconds(2000).then(result => {
  console.log(result);
})


function wait(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  })
}

async function waiting () {
  await wait(3000)
  console.log('tiempo finalizado');
  
}

waiting()

// 10. Crea una simulación de un cajero automático usando asincronía.
//     - La función checkBalance() tarda 1s y devuelve un saldo de 500$.
//     - La función withdrawMoney(amount) tarda 2s y retira dinero si hay suficiente saldo, o devuelve un error si no hay fondos.
//     - Usa async/await para hacer que el usuario intente retirar 300$ y luego 300$ más.
//     
//     Posible salida esperada:
//     Saldo disponible: 500$
//     Retirando 300$...
//     Operación exitosa, saldo restante: 200$
//     Retirando 300$...
//     Error: Fondos insuficientes

let balance = 500

function checkBalance() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`Saldo disponible: ${balance}$`)
    }, 1000);
  })  
}

function withdrawMoney(amount) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(amount <= balance) {
        balance -= amount
        resolve(`Operación exitosa, saldo restante: ${balance}$`)
      } else {
        reject('Error: Fondos insuficientes')
      }
    }, 2000);
  })
}

async function atm() {
  try {
    const balanceInfo = await checkBalance()
    console.log(balanceInfo);

    console.log('Retirando 300$...')
    const withdraw1 = await withdrawMoney(300)
    console.log(withdraw1);

    console.log('Retirando 300$...')
    const withdraw2 = await withdrawMoney(300)
    console.log(withdraw2);                 
  } catch (error) {
    console.log(error);
  }
}

atm()
