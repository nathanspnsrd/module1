//Creates header
var header = document.getElementById("header");
header.innerHTML = "<h1>JavaScript Made This!!</h1>";
header.className = "header"

//Creates subtitle
var subtitle = document.createElement("div");
header.append(subtitle);

var name1 = document.createElement("span");
name1.textContent = "Nathan";
subtitle.append(name1);
name1.className = "name";

var madeThis = document.createElement("span");
madeThis.textContent = " wrote the JavaScript";
subtitle.append(madeThis);

//Changes chat content

var messageLeftFirst = document.getElementsByClassName("message left")[0];
messageLeftFirst.innerHTML = "You are amazing!";

var messageRightFirst = document.getElementsByClassName("message right")[0];
messageRightFirst.innerHTML = "Thank you, so are you!";

var messageLeftSecond = document.getElementsByClassName("message left")[1];
messageLeftSecond.innerHTML = "What are you pursuing next?";

var messageRightSecond = document.getElementsByClassName("message right")[1];
messageRightSecond.innerHTML = "Graduating from V School, thanks!";

//Clears content
var messageBox = document.getElementsByClassName("messages")[0];
var clearButton = document.getElementById("clear-button").addEventListener("click", clearsMessages);

function clearsMessages() {
    
    console.log("The chatbox was cleared");
    for (var i = messageBox.children.length - 1; i >= 0 ; i--) {
        console.log(messageBox.children[i])
        messageBox.children[i].remove();
    }
}

//Changes themes 
var messageLeft = document.getElementsByClassName("left");
var messageRight = document.getElementsByClassName("right");
var dropDownBar = document.getElementById("theme-drop-down");

const dropDownFunction = dropDownBar.addEventListener("click", function() {
    if(dropDownBar.value === "theme-one") {
        for(let i = 0; i < messageLeft.length; i++) {
            messageLeft[i].style.backgroundColor = "cornflowerBlue"
            messageLeft[i].style.color = "black"
        }
        for(let i = 0; i < messageRight.length; i ++) {
            messageRight[i].style.backgroundColor = "tan"
            messageRight[i].style.color = "black"
        }

    } else if (dropDownBar.value === "theme-two") {
        for(let i =0; i < messageLeft.length; i++) {
            messageLeft[i].style.backgroundColor = "black"
            messageLeft[i].style.color = "white"
        }
        for(let i = 0; i < messageRight.length; i ++) {
            messageRight[i].style.backgroundColor = "red"
            messageRight[i].style.color = "black"
        }
    }
})

//Lets me add messages
var form = document["message"];
form.addEventListener("submit", function(e) {
    e.preventDefault();
    var newMessage = form.input.value;
    form.input.value = "";

    var nextMessage = document.createElement("div");
    nextMessage.textContent = newMessage;
    var messageLength = document.getElementsByClassName("messages")[0];
    messageLength.append(nextMessage);

    console.log(messageLength.children.length);

    if(dropDownBar.value === "theme-one") {
        if(messageLength.children.length % 2 === 0) {
            nextMessage.classList.add("right");
            nextMessage.classList.add("message");
            nextMessage.style.backgroundColor = "tan"
            nextMessage.style.color = "black"

        } else {
            nextMessage.classList.add("left");
            nextMessage.classList.add("message");
            nextMessage.style.backgroundColor = "cornflowerBlue";
            nextMessage.style.color = "black";
        }
    } else {
        if(messageLength.children.length % 2 === 0) {
            nextMessage.classList.add("right");
            nextMessage.classList.add("message");
            nextMessage.style.backgroundColor = "red";
            nextMessage.style.color = "black";

        } else {
            nextMessage.classList.add("left");
            nextMessage.classList.add("message");
            nextMessage.style.backgroundColor = "black";
            nextMessage.style.color = "white";
        }
    }
})