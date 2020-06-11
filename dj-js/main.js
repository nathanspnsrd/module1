//Makes box blue
var blue = document.getElementById("box").addEventListener("mouseover", makeBlue);

function makeBlue() {
    box.style.backgroundColor = "blue"
}

//Makes transparent after actions
var transparent = document.getElementById("box").addEventListener("mouseleave", makeTransparent);

function makeTransparent() {
    box.style.backgroundColor = "transparent"
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