//Makes box blue
var blue = document.getElementById("box").addEventListener("mouseover", makeBlue);

function makeBlue() {
    box.style.backgroundColor = "blue"
}

//Makes Box Red
var red = document.getElementById("box").addEventListener("mousedown", makeRed);

function makeRed() {
    box.style.backgroundColor = "red"
}

//Makes box Yellow
var yellow = document.getElementById("box").addEventListener("mouseup", makeYellow);

function makeYellow() {
    box.style.backgroundColor = "yellow"
}

//Makes box green
var green = document.getElementById("box").addEventListener("dblclick", makeGreen);

function makeGreen() {
    box.style.backgroundColor = "green"
}

//Makes box orange
var orange = document.addEventListener("scroll", makeOrange)

function makeOrange() {
    box.style.backgroundColor = "orange"
}

//Makes transparent after actions except scroll
var transparent = document.getElementById("box").addEventListener("mouseleave", makeTransparent);

function makeTransparent() {
    box.style.backgroundColor = "transparent"
}

//Uses Key Clicks
document.addEventListener('keypress', changeClick)

function changeClick(e) {
    if(e.keyCode === 98) {
        box.style.backgroundColor = "blue"
    } else if (e.keyCode === 114) {
        box.style.backgroundColor = "red"
    } else if (e.keyCode === 121) {
        box.style.backgroundColor = "yellow"
    } else if (e.keyCode === 103) {
        box.style.backgroundColor = "green"
    } else if (e.keyCode === 111) {
        box.style.backgroundColor = "orange"
    } else {
        box.style.backgroundColor = "transparent"
    }
}