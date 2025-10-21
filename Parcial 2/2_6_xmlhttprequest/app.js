const btnCambiarXML = document.getElementById('btnCambiarXML')
const btnCambiarFetch  = document.getElementById('btnCambiarFetch')
const imgPokemon = document.getElementById('pokemon')


let solicitud = new XMLHttpRequest()

    solicitud.onload = () => {
    imgPokemon.setAttribute('src', JSON.parse(solicitud.response).sprites.front_default)

}

const llamarPokemonXML = () => {
    let random = Math.ceil(Math.random() * 100)
    solicitud.open('GET', `https://pokeapi.co/api/v2/pokemon/${random}`)
    solicitud.send()    
}

btnCambiarXML.addEventListener('click', llamarPokemonXML)
btnCambiarFetch.addEventListener('click', async () => {
    let random = Math.ceil(Math.random() * 100)

    fetch(`https://pokeapi.co/api/v2/pokemon/${random}`)
    .then(response => response.json())
    .then(res => {
        imgPokemon.setAttribute('src', res.sprites.front_default)
    })
})