/*
Clase 71 - DOM
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=23010
*/

// 1. Crea un elemento (por ejemplo, un <h1 id="title">) y cambia su contenido a "¡Hola Mundo!"" al cargar la página

document.getElementById("title").textContent = "¡Hola Mundo!"

// 2. Inserta una imagen con id="myImage" y cambia su atributo src a otra URL

const myImage = document.getElementById("myImage")
myImage.src = "https://img.freepik.com/psd-gratis/hermoso-gato-retrato-aislado_23-2150186058.jpg?semt=ais_hybrid&w=740&q=80"

myImage.style.width = "300px"

// 3. Crea un <div id="box"> sin clases y agrega la clase resaltado cuando se cargue la página

const box = document.getElementById("box")
box.classList.add("resaltado")

// 4. Crea un párrafo con id="paragraph" y cambia su color de texto a azul

const paragraph = document.getElementById("paragraph")
paragraph.style.color = "blue"

// 5. Agrega un botón que, al hacer clic, cree un nuevo elemento <li> con el texto "Nuevo elemento y lo agregue a una lista <ul id="list">

const addButton = document.getElementById("addButton")
const list = document.getElementById("list")

function addListItem() {
    const newItem = document.createElement("li")
    newItem.textContent = "Nuevo elemento"
    list.appendChild(newItem)
}

addButton.addEventListener("click", addListItem)

// 6. Crea un párrafo con id="deleteParagraph" y un botón. Al hacer clic en el botón, elimina el párrafo del DOM

const deleteParagraph = document.getElementById("deleteParagraph")
const deleteButton = document.getElementById("deleteButton")

const deleteParagraphFunction = () => {
    deleteParagraph.remove()
}

deleteButton.addEventListener("click", deleteParagraphFunction)

// 7. Crea un <div id="content"> con algún texto y reemplaza su contenido por un <h2> con el mensaje "Nuevo Contenido"

const content = document.getElementById("content")
content.innerHTML = "<h2>Nuevo Contenido</h2>"

// 8. Crea un botón con id="greetBtn" y añade un evento que muestre una alerta con el mensaje "¡Hola!" al hacer clic

const greetBtn = document.getElementById("greetBtn")

greetBtn.addEventListener("click", () => {
    alert("¡Hola!")
})

// 9. Crea un <input id="textInput"> y un <div id="result">. Al escribir en el input, el <div> se debe actualizarse mostrando lo que se escribe

const textInput = document.getElementById("textInput")
const result = document.getElementById("result")

textInput.addEventListener("input", () => {
  result.textContent = textInput.value
})

// 10. Crea un botón con id="backgroundBtn" y, al hacer clic, cambia el color de fondo del <body> a un color diferente

const backgroundBtn = document.getElementById("backgroundBtn")

backgroundBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = "darkgray"
})