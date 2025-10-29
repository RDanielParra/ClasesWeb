const btnCambiarXML = document.getElementById('btnCambiarXML')
const btnCambiarFetch  = document.getElementById('btnCambiarFetch')
const btnCambiarFetchAsync  = document.getElementById('btnCambiarFetchAsync')
const btnCambiarJquery  = document.getElementById('btnCambiarJquery')
const imgPokemon = document.getElementById('pokemon')
import $ from 'jquery'


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
btnCambiarFetchAsync.addEventListener('click', async () => {
    let random = Math.ceil(Math.random() * 100)
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${random}`)
    const payload = await response.json()
    imgPokemon.setAttribute('src', payload.sprites.front_default)
})
btnCambiarJquery.addEventListener('click', () => {
    let random = Math.ceil(Math.random() * 100)
    $.ajax({
        url: `https://pokeapi.co/api/v2/pokemon/${random}`,
        method: 'POST',
        success: (response) => {
            console.log(response)
        }
    })
})