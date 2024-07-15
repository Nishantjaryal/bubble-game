let time = 6
const timer = document.querySelectorAll(".timer")
const restart_loader = document.getElementById("finale")

export function setTime() {
    restart_loader.style.top = "-100vh"
    time = 20
}



export function getTime() {
    if (time >= 0) {
        timer.forEach(TM => TM.textContent = time)
        time--


        return true
    }

    else if (time === -1) {
        time--

        restart_loader.style.top = 0
        return false
    }


}








