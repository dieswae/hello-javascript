/*
Clase 39 - Ejercicios: Clases
Vídeo: https://youtu.be/1glVfFxj8a4?t=18630
*/

// 1. Crea una clase que reciba dos propiedades

class Person {
  constructor(name, username) {
     this.name = name,
     this.username = username 
  }
}

// 2. Añade un método a la clase que utilice las propiedades

class Person2 {
  constructor(name, username) {
     this.name = name,
     this.username = username 
  }

  eat() {
    console.log('esta persona come');
  }
}

// 3. Muestra los valores de las propiedades e invoca a la función

let myPerson = new Person2("Diego", "diklausx")

console.log(myPerson);
myPerson.eat()


// 4. Añade un método estático a la primera clase

class MathOp {

  static sum(a, b) {
    return a + b
  }
}

// 5. Haz uso del método estático

console.log(MathOp.sum(4, 10))

// 6. Crea una clase que haga uso de herencia

class NewPerson extends Person {
  
  walk() {
    console.log('esta persona camina');
    
  }
}

let person4 = new NewPerson("Diego", "Diklausx")

console.log(person4)
person4.walk()

// 7. Crea una clase que haga uso de getters y setters
// 8. Modifica la clase con getters y setters para que use propiedades privadas
class Person3 {

  #name
  #username
  #bankAccount

  constructor(name, username, bankAccount) {
     this.#name = name
     this.#username = username
     this.#bankAccount = bankAccount
  }

  get name() {
    return this.#name
  }

  set bankAccount(bankAccount) {
    this.#bankAccount = bankAccount
  }
}



// 9. Utiliza los get y set y muestra sus valores

let person5 = new Person3("Diego", "dieswae", "CABANK15448796")

console.log(person5.username)
console.log(person5.name)

person5.bankAccount = "CABANK45879678"

// 10. Sobrescribe un método de una clase que utilice herencia

class NewPerson2 extends Person {

  constructor(name, username, age, hobby) {
    super(name, username)
    this.age = age
    this.hobby = hobby
  }
  
  walk() {
    console.log('esta persona camina');
    
  }
}

let person6 = new NewPerson2("Diego", "dieswae", 23, "Futbol")

console.log(person6)