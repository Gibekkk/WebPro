let body = document.getElementsByTagName("body")[0];
let html = document.getElementsByTagName("html")[0];
let submitButton = document.getElementById("button");
let buttonMale = document.getElementById("maleButton");
let buttonFemale = document.getElementById("femaleButton");
let buttonOther = document.getElementById("otherButton");
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

function toOther(){
    if(body.id == "other"){
        turnDefault();
    } else{
        turnOther();
    }
}

function turnMale(){
    body.setAttribute("id", "male");
    submitButton.classList.remove('btn-dark');
    submitButton.classList.add('btn-light');
    buttonMale.classList.remove('btn-outline-primary');
    buttonMale.classList.add('btn-primary');
    buttonFemale.classList.remove('btn-danger');
    buttonFemale.classList.add('btn-outline-danger');
    buttonOther.classList.remove('btn-other');
    buttonOther.classList.add('btn-outline-other');
    formGender.value = "Male";

    document.getElementById("genderForm").style.display = "none";
}

function turnFemale(){
    body.setAttribute("id", "female");
    submitButton.classList.remove('btn-dark');
    submitButton.classList.add('btn-light');
    buttonFemale.classList.remove('btn-outline-danger');
    buttonFemale.classList.add('btn-danger');
    buttonMale.classList.remove('btn-primary');
    buttonMale.classList.add('btn-outline-primary');
    buttonOther.classList.remove('btn-other');
    buttonOther.classList.add('btn-outline-other');
    formGender.value = "Female";

    document.getElementById("genderForm").style.display = "none";
}

function turnOther(){
    body.setAttribute("id", "other");
    submitButton.classList.remove('btn-dark');
    submitButton.classList.add('btn-light');
    buttonFemale.classList.remove('btn-danger');
    buttonFemale.classList.add('btn-outline-danger');
    buttonMale.classList.remove('btn-primary');
    buttonMale.classList.add('btn-outline-primary');
    buttonOther.classList.remove('btn-outline-other');
    buttonOther.classList.add('btn-other');
    formGender.value = "Other";

    document.getElementById("genderForm").style.display = "block";
}

function turnDefault(){
    body.setAttribute("id", "default");
    submitButton.classList.remove('btn-light');
    submitButton.classList.add('btn-dark');
    buttonMale.classList.remove('btn-primary');
    buttonMale.classList.add('btn-outline-primary');
    buttonFemale.classList.remove('btn-danger');
    buttonFemale.classList.add('btn-outline-danger');
    buttonOther.classList.remove('btn-other');
    buttonOther.classList.add('btn-outline-other');
    formGender.value = "none";

    document.getElementById("genderForm").style.display = "none";
}