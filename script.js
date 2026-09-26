const url = "https://pokeapi.co/api/v2/pokemon/25"
const resultado = document.getElementById('resultado')

//const resultado = fetch(url)
//                    .then(function (resultado) {
//                        return resultado.json()
//                    })
//                    .then(function(resultado){
//                        console.log(resultado)
//
//                   })

 //forma compactada, usando arrow function                   
const resposta = fetch(url)
                    .then(resposta => resposta.json())
                    .then(resposta => resultado.innerHTML = `
                        <img src="${resposta.sprites.front_default}"/>
                        <p>#${resposta.id}
                        <h2>${resposta.name}</h2>
                    `)

                    

