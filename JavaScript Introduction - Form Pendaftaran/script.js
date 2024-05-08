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
let outputDiv = document.getElementById("outputDiv");
const currentDate = new Date();

form.addEventListener("submit", function(event){
    event.preventDefault()
    displayDiv.innerHTML = "";
    outputDiv.style.display = "block";
    let lanjut = true;
    var check = true;
    if(check){
        if(new Date(dateForm.value) >= currentDate){
            if(lanjut){
                alert(toTitleCase(dateForm.name) + " Invalid!");
                dateForm.value = "";
                lanjut = false;
            }
        }
        if(genderForm.value == "none"){
            if(lanjut){
                alert("Please Select Your Gender!");
                lanjut = false;
            }
        }
        var alertOn = false;
        for(var i = 0; i < selects.length; i++) {
            if(selects[i].value == "none"){
                if(lanjut){
                    alertOn = true;
                }
                lanjut = false;
            }
        }
        for(var i = 0; i < inputs.length; i++){
            if(!inputs[i]){
                if(lanjut){
                    alertOn = true;
                }
                lanjut = false;
            }
        }
        if(dateForm.value == "" && lanjut){
            alertOn = true;
        }
        if(alertOn){
            alert("Please Fill All Inputs!");
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