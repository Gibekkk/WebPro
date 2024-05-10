const themeButton = document.getElementById("themeChangeBtn");
const bodyContainer = document.getElementsByTagName("body")[0];

function changeTheme() {
    if(bodyContainer.classList.contains("light")){
        toDark();
    } else{
        toLight();
    }
}

function checkTheme(){
    if(bodyContainer.classList.contains("light")){
        toLight();
    } else{
        toDark();
    }
}

function toDark(){
    bodyContainer.classList.remove("light");
    bodyContainer.classList.add("dark");
    themeButton.classList.remove("btn-light");
    themeButton.classList.add("btn-dark");
    themeButton.innerHTML = "Dark Mode";
}

function toLight(){
    bodyContainer.classList.remove("dark");
    bodyContainer.classList.add("light");
    themeButton.classList.remove("btn-dark");
    themeButton.classList.add("btn-light");
    themeButton.innerHTML = "Light Mode";
}

document.addEventListener("DOMContentLoaded", function(event) { 
    // checkTheme();
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    if (darkThemeMq.matches) {
      toDark()
    } else {
      toLight()
    }
});
