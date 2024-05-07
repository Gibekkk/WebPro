var inputs = document.getElementsByTagName('input');
var selects = document.getElementsByTagName('select');
for(var i = 0; i < inputs.length; i++) {
    // inputs[i].required = true;
    inputs[i].classList.add("focus-ring");
}
        
const imgForm = document.querySelector('input[type="file"]');
const dateForm = document.querySelector('input[type="date"]');
const genderForm = document.getElementById("genderInput");
const form = document.getElementById("myForm");
let pagehr = document.createElement("hr");
let displayDiv = document.getElementById("displayDiv");
const currentDate = new Date();

form.addEventListener("submit", function(event){
    event.preventDefault()
    displayDiv.innerHTML = "";
    let lanjut = true;
    if(new Date(dateForm.value) > currentDate){
        alert(toTitleCase(dateForm.name) + " Invalid!");
        dateForm.value = "";
        lanjut = false;
    }
    if(genderForm.value == "none"){
        alert("Please Select Your Gender!");
        lanjut = false;
    }
    for(var i = 0; i < selects.length; i++) {
        if(selects[i].value == "none"){
            alert(toTitleCase(selects[i].name) + " Not Filled!");
            lanjut = false;
        }
    }
    if(lanjut){
        displayDiv.appendChild(pagehr);
        const formData = new FormData(form);
        var parsedData = {};
        for(var [key, value] of formData){
            parsedData[key] = value;
            switch(typeof value){
                case "string":
                    let para = document.createElement("p");
                    para.textContent = toTitleCase(key) + ": " + value;
                    displayDiv.appendChild(para);
                    break;
                case "object":
                    let prg = document.createElement("p");
                    prg.textContent = toTitleCase(key) + ": ";
                    displayDiv.appendChild(prg);
                    if(imgForm.files.length != 0){
                        let file = imgForm.files[0];
                        let image = document.createElement("img");
                        var reader = new FileReader();
                        reader.readAsDataURL(file);
                        reader.onload = function () {
                            localStorage.setItem("image", reader.result);
                            image.setAttribute("src", localStorage.getItem("image"));
                            image.setAttribute("class", "output-image img-fluid w-50");
                        };
                        displayDiv.appendChild(image);
                    }
                    break;
            }
        }
        console.log(parsedData);
        displayDiv.style.display = "block";
    }
});

function imageInput(){
    let file = imgForm.files[0];
    const  fileType = file['type'];
    const validImageTypes = ['image/gif', 'image/jpeg', 'image/png'];
    if (!validImageTypes.includes(fileType)) {
        alert("File Type is Not Supported! Only Image!");
        imgForm.value = "";
    }
}


function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}