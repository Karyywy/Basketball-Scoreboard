let homeresult = document.getElementById("homescore")
let guestresult = document.getElementById("guestscore")
let homescore = 0
let guestscore = 0

function homeadd1() {
    homescore += 1
    homeresult.textContent = homescore
}

function homeadd2() {
    homescore += 2
    homeresult.textContent = homescore
}

function homeadd3() {
    homescore += 3
    homeresult.textContent = homescore
}

function resethome() {
   homescore = 0
   homeresult.textContent = homescore
}


function guestAdd1() {
    guestscore += 1
    guestresult.textContent = guestscore
}

function guestAdd2() {
    guestscore += 2
    guestresult.textContent = guestscore
}

function guestAdd3() {
    guestscore += 3
    guestresult.textContent = guestscore
}

function resetguest() {
   guestscore = 0
   guestresult.textContent = guestscore
}