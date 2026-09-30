
const resultado = document.getElementById('resultado')
const campoBusca = document.getElementById('campoBusca')
const btnBuscar = document.getElementById('btnBuscar')
const btnAnterior = document.getElementById('btnAnterior')
const btnAleatorio = document.getElementById('btnAleatorio')
const btnProximo = document.getElementById('btnProximo')
var pokemonAtual = 1;
buscarPokemon(1)

//const resultado = fetch(url)
//                    .then(function (resultado) {
//                        return resultado.json()
//                    })
//                    .then(function(resultado){
//                        console.log(resultado)
//
//                   })

//forma compactada, usando arrow function                   
// const resposta = fetch(url)
//                    .then(resposta => resposta.json())
//                    .then(resposta => resultado.innerHTML = `
//                        <img src="${resposta.sprites.front_default}"/>
//                        <p>#${resposta.id}</p>
//                        <h2>${resposta.name}</h2>
//                    `)
// function buscarPokemon(termo){ 
//     const url = "https://pokeapi.co/api/v2/pokemon/" + termo
//     fetch(url)
//         .then(resposta => resposta.json())
//         .then(resposta => resultado.innerHTML = `
//             <img src="${resposta.sprites.front_default}"/>
//             <p>#${resposta.id}</p>
//             <h2>${resposta.name}</h2>
//         `)
// }

async function buscarPokemon(termo) {
    const url = "https://pokeapi.co/api/v2/pokemon/" + termo
    const resposta = await fetch(url)
    const pokemon = await resposta.json()

    resultado.innerHTML = ` 
        <img src="${pokemon.sprites.front_default}"/>
        <p>#${pokemon.id}</p>
        <h2>${pokemon.name}</h2>

    `

}

btnBuscar.addEventListener('click', () => {
    console.log("Fui clicado buscando pokemon " + campoBusca.value)
    pokemonAtual = campoBusca.value
    buscarPokemon(pokemonAtual)

});
campoBusca.addEventListener('keyup', evento => {
    if (evento.key == "Enter") {
        btnBuscar.click()

    }

})

btnAnterior.addEventListener('click', () => {

    pokemonAtual--

    buscarPokemon(pokemonAtual)

})

btnProximo.addEventListener('click', () => {

    pokemonAtual++

    buscarPokemon(pokemonAtual)

})

btnAleatorio.addEventListener('click', () => {

    pokemonAtual = Math.floor(Math.random() * 1025) + 1

    buscarPokemon(pokemonAtual)

})

