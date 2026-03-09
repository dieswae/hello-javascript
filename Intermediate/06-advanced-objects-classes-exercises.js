/*
Clase 38 - Objetos y clases avanzados
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=11832
*/

// 1. Agregega una función al prototipo de un objeto

let person = {
  name: 'Diego',
  age: '23',
  greet() {
    console.log(`Hola, soy ${this.name}`)
  }
}

person.sayAge = function () {
  console.log(`Tengo ${this.age} años`)
}

person.sayAge()

// 2. Crea un objeto que herede de otro

let developer = Object.create(person)
developer.language = 'JavaScript'

console.log(developer.language)
developer.name = 'Diegodev'
console.log(developer.name)

// 3. Define un método de instancia en un objeto

function Car(make, model) {
  this._make = make
  this._model = model
}

Car.prototype.getInfo = function () {
  console.log(`Este es un ${this._make} ${this._model}`)  
}

let myCar = new Car('Toyota', 'Corolla')
myCar.getInfo()

// 4. Haz uso de get y set en un objeto

let user = {
  _name: 'Diego',
  get name() {
    return this._name
  },
  set name(newName) {
    this._name = newName
  }
}

console.log(user.name)
user.name = 'Diegodev'
console.log(user.name)

// 5. Utiliza la operación assign en un objeto

let target = { a: 1, b: 2 }
let source = { b: 4, c: 5 }

let returnedTarget = Object.assign({}, target, source)

console.log(target)
console.log(returnedTarget)

// 6. Crea una clase abstracta

class Shape {
  constructor(name) {
    if (new.target === Shape) {
      throw new Error('No se puede instanciar una clase abstracta')
    }
    this.name = name
  }

  area() {
    throw new Error('Este método tiene que ser implementado por la subclase')
  }
}

// 7. Utiliza polimorfismo en dos clases diferentes

class Circle extends Shape {
  constructor(radius) {
    super('Circle')
    this.radius = radius
  }

  area() {
    return Math.PI * this.radius * this.radius
  }
}

class Square extends Shape {
  constructor(side) {
    super('Square')
    this.side = side
  }

  area() {
    return this.side * this.side
  }
}

const circle = new Circle(5)
console.log(`${circle.name} area: ${circle.area()}`)

const square = new Square(4)
console.log(`${square.name} area: ${square.area()}`)

// 8. Implementa un Mixin

const LoggerMixin = {
  log(message) {
    console.log(`[${this.name}] ${message}`)
  }
}

class User extends Shape {}

Object.assign(User.prototype, LoggerMixin)

const person2 = new User('Diegodev')
person2.log('¡Hola, soy un usuario!')

// 9. Crea un Singleton

class Session {
  constructor(name) {
    if (Session.instance) {
      return Session.instance
    }
    this.name = name
    Session.instance = this
  }

  clear() {
    Session.instance = null
  }
}

const session1 = new Session('Diegodev')
const session2 = new Session('OtroUsuario')

console.log(session1.name)
console.log(session2.name)
console.log(session1 === session2)

session1.clear()

const session3 = new Session('NuevoUsuario')
console.log(session3.name)
console.log(session1 === session3)
// 10. Desarrolla un Proxy

const handler = {
  get (target, prop) {
    console.log(`Accediendo a la propiedad ${prop}`)
    return target[prop]
  },
  set (target, prop, value) {
    console.log(`Modificando la propiedad ${prop} a ${value}`)
    target[prop] = value
  }
}

class bankAccount {
  constructor(owner, balance) {
    this.owner = owner
    this.balance = balance
  }
}

const account = new Proxy(new bankAccount('Diegodev', 1000), handler)

console.log(account.owner)
account.balance = 2000
console.log(account.balance)