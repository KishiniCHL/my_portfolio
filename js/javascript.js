// on prend le modal
var modal = document.getElementById("menu_info");

// on appelle la variable du bouton qui permettra d'ouvrir le modal
var menu = document.getElementById("menu_burger");

//on prend le 4e lien (on compte a partir de 0) dans le modal//
var menu_contact = document.getElementsByClassName("menu_a")[3];

// quand on clique ca ouvre le modal
menu.onclick = function() {
  if(modal.style.display === "block"){
    modal.style.display = "none"
  }
  else{
    modal.style.display = "block"
  }
}
//si on clique sur contact dans le menu burger le modal se display none et la checkbox se décoche//
menu_contact.onclick = function (){
  modal.style.display = "none"
  menu.checked = false;
}

//les settings de la librairie js aos

// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

///


