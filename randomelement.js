const container = document.getElementById("circleContainer")
let circles = []
const range = 200

function makeNumber() {
    const number = Math.floor(Math.random() * (range - 1))
    circles.push(number)
    return number
}

export function makeCircles() {
    const circ = document.createElement("div")
    circ.classList.add("circles")
    circ.classList.add("flex")
    circ.textContent = makeNumber()
    container.appendChild(circ)
}

export function getEle() {
    const number = Math.floor(Math.random() * (circles.length - 1))
    return  circles[number]
}


