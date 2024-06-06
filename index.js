// Obtener referencias a los elementos del DOM con los que interactuará el código
const apiButton = document.getElementById("apiButton"); // Botón que desencadena la llamada a la API
const apiName = document.getElementById("apiName"); // Elemento donde se mostrará el nombre del Pokémon obtenido

// Función que realiza la llamada a la API
const callAPI = () => {
    // Realizar una solicitud de red a la API de Pokémon para obtener información sobre Zapdos
    fetch("https://pokeapi.co/api/v2/pokemon/zapdos")
    // Procesar la respuesta obtenida de la solicitud
    .then(res => res.json())
    // Manipular los datos obtenidos de la respuesta
    .then(data => {
        // Imprimir los datos obtenidos en la consola del navegador
        console.log(data);
        // Mostrar el nombre del Pokémon en el elemento correspondiente del DOM
        apiName.innerText = JSON.stringify(data.name);
    })
    // Manejar errores que puedan ocurrir durante la solicitud o el procesamiento de la respuesta
    .catch(e => console.error(new Error(e)));
}

// Agregar un event listener al botón para llamar a la función callAPI cuando se haga clic en él
apiButton.addEventListener('click', callAPI);
