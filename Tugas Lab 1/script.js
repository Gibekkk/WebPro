var checkScrollSpeed = (function(settings){
    settings = settings || {};
  
    var lastPos, newPos, timer, delta, 
        delay = settings.delay || 50; // in "ms" (higher means lower fidelity )
  
    function clear() {
      lastPos = null;
      delta = 0;
    }
  
    clear();
    
    return function(){
      newPos = window.scrollY;
      if ( lastPos != null ){ // && newPos < maxScroll 
        delta = newPos -  lastPos;
      }
      lastPos = newPos;
      clearTimeout(timer);
      timer = setTimeout(clear, delay);
      return delta;
    };
})();

var shadow = 0;
var shadowTransition = 2.5;
var shadowBack = 1;
var shadowEffect = setInterval(function() {
    var scroll = checkScrollSpeed();
    let contents = document.getElementById('allContents');
    // (shadow == 0) ? contents.style.textShadow = "none" : contents.style.textShadow = "0px "+shadow*-1+"px 3px black";
    (scroll != 0) ? (scroll > shadow) ? shadow += shadowTransition : (scroll < shadow) ? shadow -= shadowTransition : shadow = 0 : (shadow < shadowBack*-1 || shadow > shadowBack) ? (scroll > shadow) ? shadow += shadowBack : (scroll < shadow) ? shadow -= shadowBack : shadow = 0 : shadow = 0;
    contents.style.textShadow = "0px "+shadow*-1+"px 3px black"
    console.log("Scroll: "+scroll+"; Shadow: "+shadow);
}, 1);