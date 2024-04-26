const header_text = document.querySelectorAll(".header-text");
const header_banner = document.getElementById("header-banner");
header_banner.setAttribute('style', "padding: 1.5%; background: none !important;");
// const header_button_search = document.getElementById("header-button");

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    let background = header_banner.style.background;
    var w = window.innerWidth;
    
    if(value == "0"){
        // for (let i = 0; i < header_text.length; i++) {
        //     // header_button_search.classList.remove('btn-outline-light');
        //     // header_button_search.classList.add('btn-outline-dark');
        //     header_text[i].style.color = "black";
        // }
        background = (w > 991) ? "none" : "black";
    } else{
        // for (let i = 0; i < header_text.length; i++) {
        //     // header_button_search.classList.remove('btn-outline-dark');
        //     // header_button_search.classList.add('btn-outline-light');
        //     header_text[i].style.color = "white";
        // }
        background = "black";
    }
    header_banner.setAttribute('style', "padding: 1.5%; background: " + background + " !important;");
})

function reportWindowSize(){
    let value = window.scrollY;
    let background;
    var w = window.innerWidth;
    if(value == "0"){
        background = (w > 991) ? "none" : "black";
    } else{
        background = "black";
    }
    header_banner.setAttribute('style', "padding: 1.5%; background: " + background + " !important;");
}

window.onresize = reportWindowSize;