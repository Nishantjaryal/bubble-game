
import { elementsConfigured } from "./pop.js"
import {makeCircles} from "./randomelement.js"
const container = document.getElementById("circleContainer")
const restart_button = document.querySelector("#Restart")
const start_button = document.querySelector("#Start")
const start_button_mob = document.querySelector("#mob-start-btn")
const nums_cont = document.querySelector("#num-cont");
const find_num_cont = document.querySelector("#start-view-only");
const circle_count = 110




function load() {
    cleanBoard()

    for (let index = 0; index < circle_count; index++) {
        makeCircles()
    }
}

function start_game(){
    load()
    start_button.style.display = "none"
    nums_cont.style.display = "block"
    find_num_cont.style.display = "block"
    elementsConfigured()
}

start_button.addEventListener("click",()=>{
    start_game()
})
start_button_mob.addEventListener("click",()=>{
    start_game()
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

