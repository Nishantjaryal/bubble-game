import { getEle } from "./randomelement.js"
import { incScore, setScore } from "./score.js"
import { getTime, setTime } from "./timer.js"


const circles = document.querySelectorAll(".circles")
const number = document.querySelector("#number")
const restart_button = document.querySelector("#Restart")
let isAllowed = true
let isTimerStart = false


setInterval(() => {
        if (isTimerStart) {
            isAllowed = getTime()
        }
}, 1000);

const pickElement = () => {
    number.textContent = getEle()
}



const manageScores = (circle) => {

    if (isAllowed && number.textContent === circle.textContent) {
        incScore()
        pickElement()
    }


}


export function elementsConfigured() {

    circles.forEach((circle) => {
        circle.addEventListener("click", () => {
            manageScores(circle)
        })
    })

    isTimerStart = true
    pickElement()

}


function resetParams() {
    setScore()
    setTime()
}

restart_button.addEventListener("click", () => {
    resetParams()
})



