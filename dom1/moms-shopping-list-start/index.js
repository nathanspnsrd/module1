var form = document["addItem"];

//Adds item
form.addEventListener("submit", function(e) {
    e.preventDefault();
    var newItem = form.title.value;
    form.title.value = "";
    
    //Creates li for item
    var nextItem = document.createElement("li");
    var listLength = document.getElementsByClassName("list")[0];
    nextItem.classList.add("liLook");

    //Creates div for item
    var nextDiv = document.createElement("div");
    nextDiv.classList.add("itemDiv");  

    //Creates span for item
    var nextSpan = document.createElement("span");
    nextSpan.textContent = newItem;
    nextSpan.classList.add("itemName");

    //Creates Edit Button for item
    //It would be cool to flex this and the delete button to the end, but I have played with it and can't seem to get it
    var edit = document.createElement("button");
    edit.textContent = "edit";
    edit.classList.add("editButton");
    edit.addEventListener("click", changeButton)

    //Creates delete button
    var xButton = document.createElement("button");
    xButton.textContent = "X";
    xButton.classList.add("deleteButton");
    xButton.addEventListener("click", deleteRow);

    //Appends everything
    nextDiv.append(nextSpan);
    nextDiv.append(edit);
    nextDiv.append(xButton);
    
    nextItem.append(nextDiv);
    listLength.append(nextItem);
})

//Clears the whole list
var listBox = document.getElementsByClassName("list")[0];
var clearButton = document.getElementById("clear-button");

function clearsItems() {
    let areSure = confirm("Are you sure you want to delete this list?")
    //Would love to learn how to edit confirm box.
    if (areSure === true) {
        for (var i = listBox.children.length - 1; i >= 0; i--) {
            listBox.children[i].remove();
        }
    }  
}

clearButton.addEventListener("click", clearsItems);

//Deletes item
var deleteItem = document.getElementsByClassName("deleteButton");

for (var i = 0; i < deleteItem.length; i++) {
    deleteItem[i].addEventListener("click", deleteRow);
}

function deleteRow () {
    this.parentNode.parentNode.remove()
}

//Allows user to edit items which are in the list
var itemName = document.getElementsByClassName("itemName");
var editButton = document.getElementsByClassName("editButton");

function addInputBox(item) {
   // for (var i = 0; i < itemName.length; i++) {
   //     var newInput = document.createElement("input");
   //     itemName[i].parentNode.prepend(newInput);
   // }
   var newInput = document.createElement("input");
   newInput.value = item.parentNode.children[0].textContent
   item.parentNode.prepend(newInput)
   
}

//Turns edit button into save button
function changeButton() {
    addInputBox(this)
    var saveButton = document.createElement("button");
    saveButton.textContent = "Save"
    this.classList.add("hidden")
    var editBtn = this
    saveButton.addEventListener("click", function() {
        // this.parentNode.children[0] == new input

        this.parentNode.children[1].textContent = this.parentNode.children[0].value
        editBtn.classList.remove("hidden")
        this.parentNode.children[0].remove()
        this.remove()
    })
    this.parentNode.insertBefore(saveButton, this)
}

for (var i = 0; i < editButton.length; i++) {
    editButton[i].addEventListener("click", changeButton);  
}