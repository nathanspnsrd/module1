var form = document["addItem"];

//Adds item
form.addEventListener("submit", function(e) {
    e.preventDefault();
    var newItem = form.title.value;
    form.title.value = "";
    
    //Creates li for item
    var nextItem = document.createElement("li");
    var listLength = document.getElementsByClassName("list")[0];
    listLength.append(nextItem);
    nextItem.classList.add("liLook");

    //Creates div for item
    var nextDiv = document.createElement("div");
    nextItem.append(nextDiv);
    nextDiv.classList.add("itemDiv");

    //Creates span for item
    var nextSpan = document.createElement("span");
    nextSpan.textContent = newItem;
    nextDiv.append(nextSpan);
    nextSpan.classList.add("itemName");

    //Creates Edit Button for item
    var edit = document.createElement("button");
    edit.textContent = "edit";
    nextDiv.append(edit);
    edit.classList.add("editButton");

    //Creates delete button
    var xButton = document.createElement("button");
    xButton.textContent = "X";
    nextDiv.append(xButton);
    xButton.classList.add("deleteButton");
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

/*Deletes item
var deleteItem = document.getElementsByClassName("deleteButton");

function deleteRow () {
    var rowToDelete = document.getElementsByClassName("itemDiv");
    var itemLine = document.getElementsByClassName("liLook");
    itemLine.rowToDelete.remove();
}

deleteItem.addEventListener("click", deleteRow);
*/

/*Allows user to edit items which are in the list
var itemName = document.getElementsByClassName("itemName");
var editButton = document.getElementsByClassName("editButton");

function editItems () {
    itemName.createElement("input")
    itemName.classList.add("input")
}
editButton.addEventListener("click", editItems)

//Changes save button to edit button */