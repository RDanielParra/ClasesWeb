var overflowButton = document.getElementById("overflowButton")

overflowButton.addEventListener("click", () => {
    alert([...document.getElementsByClassName("contenedor")].forEach(e => {
        return e.style["overflow"]
    }))
    if([...document.getElementsByClassName("contenedor")].forEach(e => {
        return e.style["overflow"] == "auto"
    })){
        alert("ola"),
        [...document.getElementsByClassName("caja")].forEach(e => {
            e.style["float"] = "rigth"
        }),
        [...document.getElementsByClassName("contenedor")].forEach(e => {
        e.style["overflow"] = "auto"
        })
    }
    [...document.getElementsByClassName("contenedor")].forEach(e => {
        e.style["overflow"] = "none"
        })
    
})