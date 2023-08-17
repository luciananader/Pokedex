const pokeApi = {}

pokeApi.getPokemons = (offset = 0, limit = 20) => {
    const url=`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`; 
// aqui no lugar dos número você pega o valor, que a função recebe e joga na url

    return fetch(url)
        .then((response)=>response.json())
        .then((jsonBody)=>jsonBody.results) // falta fazer o tratamento dos dados aqui
        .catch((error)=>console.error(error))
}

