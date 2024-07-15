import { getEle,circles,setCircles } from "./randomelement.js"
import { incScore, setScore } from "./score.js"
import { getTime, setTime } from "./timer.js"


const number = document.querySelector("#number")
const restart_button = document.querySelector("#Restart")
let isAllowed = true
let isTimerStart = false


setInterval(() => {
    if (isTimerStart) {
        isAllowed = getTime()
    }
}, 1000);

export const pickElement = (circles) => {
    const num = getEle()
    console.log(num)

    if (circles[num]) {
        number.textContent = circles[num]
    }
    else {
        console.log("fuck")
    }

}



const manageScores = (circle, circles) => {

    if (isAllowed && number.textContent == circle.textContent) {
        console.log("manageScores")

        incScore()
        pickElement(circles)
    }


}





export function elementsConfigured() {
    const circleclass = document.querySelectorAll(".circles")
    circleclass.forEach((circle) => {
    circle.addEventListener("click", () => {
        manageScores(circle, circles)
    })
})
    isTimerStart = true
    pickElement(circles)

}


function resetParams() {
    setScore()
    setTime()
    setCircles()
}

restart_button.addEventListener("click", () => {
    resetParams()
})



