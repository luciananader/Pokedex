const offset = 0;
const limit = 10
const url='https://pokeapi.co/api/v2/pokemon?offset=0&limit=10';

function convertPokemonHtml(pokemon){
    return `<li class="pokemon">
    <span class="number">#001</span>
    <span class="name">Bulbasaur</span>

    <div class="detail">
        <ol class="types">
            <li class="type">grass</li>
            <li class="type">poison</li>
        </ol>

        <img src="1.png" alt="" srcset=""></img>
    </div>
</li>`

}

fetch(url)

.then((response)=>response.json())
.then((jsonBody)=>jsonBody.results)
.then((pokemonList)=>console.log(pokemonList))

.catch((error)=>console.error(error))


