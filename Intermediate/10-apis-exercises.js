/*
Clase 60 - APIs
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=18710
*/

// 1. Realiza una petición GET con fetch() a JSONPlaceholder y muestra en la consola la lista de publicaciones

async function getPosts() {
  const url = "https://jsonplaceholder.typicode.com/posts"

  try {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.log('Error:', error)
  }
}

getPosts()


// 2. Modifica el ejercicio anterior para que verifique si la respuesta es correcta usando response.ok. Si no lo es, lanza y muestra un error

async function getPosts() {
  const url = "https://jsonplaceholder.typicode.com/diego"

  try {
    const response = await fetch(url)
    if(!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json()

    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

getPosts()

// 3. Reescribe el ejercicio 1 usando la sintaxis async/await en lugar de promesas
// lo hare con .then ya que ya lo hice con async/await en el ejercicio 1

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
        if(!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json()
    })
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.log("Error", error)
    })


// 4. Realiza una petición POST a JSONPlaceholder para crear una nueva publicación. Envía un objeto con propiedades como title o body

async function createPost() {
  const postData = {
    title: "Mi nueva publicación",
    body: "Este es el contenido de mi nueva publicación",
    userId: 1
  }

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(postData)
    })

    if(!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.log('Error:', error)
  }   
}

createPost()

// 5. Utiliza el método PUT para actualizar completamente un recurso (por ejemplo, modificar una publicación) en JSONPlaceholder

async function updatePost() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/100", {
      method: "PUT",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        title: 'Este es el nuevo titulo de este post',
        body: 'Este es el nuevo cuerpo de este post',
        userId: 1,
      })
    })
    if(!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.log('Error:', error)  
  }
}

updatePost()

// 6. Realiza una petición PATCH para modificar únicamente uno o dos campos de un recurso existente

async function partialPostUpdate() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/18", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ title: "Este es el nuevo título de mi post 18" })
    })
    if(!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.log('Error:', error)  
  }
}

partialPostUpdate()

// 7. Envía una solicitud DELETE a la API para borrar un recurso (por ejemplo, una publicación) y verifica la respuesta

async function deletePost() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/99", {
      method: "DELETE",
      headers: {
        "Content-type": "application/json"
      }
    })
    if(!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    if(response.status !== 204) {
      const data = await response.json()
      console.log(data)
    } else {
      console.log("Recurso eliminado correctamente")
    }
  } catch (error) {
    console.log(error)
  }
}

deletePost()

// 8. Crea una función que realice una solicitud GET (la que quieras) a OpenWeatherMap

async function getWeather(city) {
    const apiKey = "e5e3fabd4d5c2535519619d035e6d0bd"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.error('Error:', error)
    }
}

getWeather("Barcelona")

// 9. Utiliza la PokéAPI para obtener los datos de un Pokémon concreto, a continuación los detalles de la especie y, finalmente, la cadena evolutiva a partir de la especie

async function getPokemonData(pokemonName) {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`

  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const pokemonData = await response.json()
    console.log("Datos del Pokémon:", pokemonData)

    const speciesResponse = await fetch(pokemonData.species.url)
    if (!speciesResponse.ok) {
      throw new Error(`HTTP error! status: ${speciesResponse.status}`)
    }
    const speciesData = await speciesResponse.json()
    console.log("Datos de la especie:", speciesData)

    const evolutionChainResponse = await fetch(speciesData.evolution_chain.url)
    if (!evolutionChainResponse.ok) {
      throw new Error(`HTTP error! status: ${evolutionChainResponse.status}`)
    }
    const evolutionChainData = await evolutionChainResponse.json()
    console.log("Cadena evolutiva:", evolutionChainData)
  } catch (error) {
    console.error('Error:', error)
  }
}

getPokemonData("charmander")

// 10. Utiliza una herramienta como Postman o Thunder Client para probar diferentes endpoint de una API
// hecho en postman, no se puede mostrar aqui

