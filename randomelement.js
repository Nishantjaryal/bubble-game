const container = document.getElementById("circleContainer")
export let circles = []

export function setCircles() {
    circles = []
}

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

    let prev = 0
    let now  = Math.floor(Math.random() * (circles.length - 1))
    if (prev===now){
        getEle()
    }
    else if(prev!==now){
        prev = now
    }


    return  now

}
