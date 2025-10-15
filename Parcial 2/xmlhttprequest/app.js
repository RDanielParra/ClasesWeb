const btnCambiar = document.getElementById('btnCambiar')
const imgPokemon = document.getElementById('pokemon')


let solicitud = new XMLHttpRequest()

    solicitud.onload = () => {
    console.log(JSON.parse(solicitud.response))
    imgPokemon.setAttribute('src', JSON.parse(solicitud.response).sprites.front_default)

}

const llamarPokemon = () => {
    let random = Math.ceil(Math.random() * 100)
    
    console.log(random)

    solicitud.open('GET', `https://pokeapi.co/api/v2/pokemon/${random}`)
    solicitud.send()    
}

btnCambiar.addEventListener('click', llamarPokemon)

llamarPokemon()