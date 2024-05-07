let body = document.getElementsByTagName("body")[0];
let html = document.getElementsByTagName("html")[0];
let submitButton = document.getElementById("button");
let buttonMale = document.getElementById("maleButton");
let buttonFemale = document.getElementById("femaleButton");
let formGender = document.getElementById("genderInput");
function toMale(){
    if(body.id == "male"){
        turnDefault();
    } else{
        turnMale();
    }
}

function toFemale(){
    if(body.id == "female"){
        turnDefault();
    } else{
        turnFemale();
    }
}

function turnMale(){
    body.setAttribute("id", "male");
    // html.setAttribute("data-bs-theme", "light");
    submitButton.classList.remove('btn-dark');
    submitButton.classList.add('btn-light');
    buttonMale.classList.remove('btn-outline-primary');
    buttonMale.classList.add('btn-primary');
    buttonFemale.classList.remove('btn-danger');
    buttonFemale.classList.add('btn-outline-danger');
    formGender.value = "Male";
}

function turnFemale(){
    body.setAttribute("id", "female");
    // html.setAttribute("data-bs-theme", "light");
    submitButton.classList.remove('btn-dark');
    submitButton.classList.add('btn-light');
    buttonFemale.classList.remove('btn-outline-danger');
    buttonFemale.classList.add('btn-danger');
    buttonMale.classList.remove('btn-primary');
    buttonMale.classList.add('btn-outline-primary');
    formGender.value = "Female";
}

function turnDefault(){
    body.setAttribute("id", "default");
    // html.setAttribute("data-bs-theme", "dark");
    submitButton.classList.remove('btn-light');
    submitButton.classList.add('btn-dark');
    buttonMale.classList.remove('btn-primary');
    buttonMale.classList.add('btn-outline-primary');
    buttonFemale.classList.remove('btn-danger');
    buttonFemale.classList.add('btn-outline-danger');
    formGender.value = "none";
}