var form = document.getElementById("airline-form");
var submit = document.getElementById("submit");

function formAlert() {
    var firstName = form.elements["first-name"].value;
    var lastName = form.elements["last-name"].value;
    var age = form.elements["age"].value;
    var gender = form.elements["gender"].value;
    var location = form.elements["travel-location"].value;
    var diet = form.elements["diet"];
    console.log(form.elements['diet'])
    var dietItems = []
    for(let i = 0; i < diet.length; i++){
        if(diet[i].checked){
            dietItems.push(diet[i].value)
        }
    }
    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + dietItems + "\nAwesome, now if you die, it won't be an accident..");
}


submit.addEventListener("click", formAlert);