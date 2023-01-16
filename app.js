const secondhands = document.getElementById("seconds-hand")
const minuteshand = document.getElementById("minutes-hand")
const hourshand = document.getElementById("hours-hand")

function gettime(){
    const now = new Date()
    const seconds = now.getSeconds()
    const minutes = now.getMinutes()
    const hours = now.getHours()

    const timeInterval = 6

    secondhands.style.transform = 'rotate('+(seconds * timeInterval)+'deg)'
    minuteshand.style.transform = 'rotate('+(minutes * timeInterval + seconds / 10)+'deg)'
    hourshand.style.transform = 'rotate('+(hours * timeInterval / 2)+'deg)'
}

setInterval(gettime, 100)
alert("javascript,html clock")

