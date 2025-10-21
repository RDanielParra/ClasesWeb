import { say } from 'cowsay'

const al = document.getElementById('hola')

al.addEventListener('click', () => {
    alert(say({
        text: "Ola",
        e: "oO",
        T: "U"
    }))
})
