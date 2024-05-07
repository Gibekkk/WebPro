var inputs = document.getElementsByTagName('input');
        for(var i = 0; i < inputs.length; i++) {
            // inputs[i].required = true;
        }

        const imgForm = document.getElementById('image');
        const poiForm = document.getElementById('poi');
        const dateForm = document.getElementById('tgl_lahir');
        const form = document.getElementById("myForm");
        let pagehr = document.createElement("hr");
        let displayDiv = document.getElementById("display");
        const currentDate = new Date();
        const imgStyle = "width: 50%";
        form.addEventListener("submit", function(event){
            event.preventDefault()
            displayDiv.innerHTML = "";
            displayDiv.appendChild(pagehr);
            let lanjut = true;
            if(new Date(dateForm.value) > currentDate){
                alert("Tanggal Lahir Invalid!");
                dateForm.value = "";
                lanjut = false;
            }
            if(lanjut){
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
                                    image.setAttribute("style", imgStyle);
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