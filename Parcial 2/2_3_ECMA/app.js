import { say } from 'cowsay'
const btnHablar = document.querySelector("#btnHablar")

btnHablar.addEventListener("click", () => {
    console.log(say({
        text: "Ola",
        e: "oO",
        T: "U"
    }))
})