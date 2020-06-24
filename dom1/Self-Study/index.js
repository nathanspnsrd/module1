var myInput = document.getElementById('input');

var myButton = document.getElementById('button').addEventListener('click', function() {
    console.log(myInput.value);
});                        

var newInput = document.getElementById('button').addEventListener('click', function() {
    var newP = document.createElement("h2")
    newP.textContent = myInput.value;
    document.body.append(newP);
});  