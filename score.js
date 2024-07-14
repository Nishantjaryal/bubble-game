let score = 0
const score_card = document.querySelectorAll(".score")

const highestScore = document.querySelectorAll(".highestScore")
const key = "928rty278ry8ryfh9ewr4"
let topScore = localStorage.getItem(key)
if(!topScore) localStorage.setItem(key,score)
if(topScore) highestScore.forEach(HS => HS.textContent = topScore) 

export function incScore() {

    score+=5
    topScore = localStorage.getItem(key)
    if (score>topScore) {
        localStorage.setItem(key,score)
        highestScore.forEach(HS => HS.textContent = score)
    }
    score_card.forEach(SC => SC.textContent = score)

}

export function setScore() {
    score = 0;
}