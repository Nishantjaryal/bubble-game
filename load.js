
import { elementsConfigured } from "./pop.js"
import {makeCircles} from "./randomelement.js"
const container = document.getElementById("circleContainer")
const restart_button = document.querySelector("#Restart")
const start_button = document.querySelector("#Start")

const circle_count = 110




function load() {
    cleanBoard()

    for (let index = 0; index < circle_count; index++) {
        makeCircles()
    }
}

start_button.addEventListener("click",()=>{

    load()
    start_button.style.display = "none"
    elementsConfigured()

})


const cleanBoard = () => {
    container.innerHTML = ""
}

const load_new = () => {
    cleanBoard()
    load()
    elementsConfigured()
}

restart_button.addEventListener("click", () => {
    load_new()
})

