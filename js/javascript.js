// on prend le modal
var modal = document.getElementById("menu_info");

// on appelle la variable du bouton qui permettra d'ouvrir le modal
var menu = document.getElementById("menu_burger");

//on prend le 4e lien (on compte a partir de 0) dans le modal//
var menu_contact = document.getElementsByClassName("menu_a")[3];

var body = document.body;

// quand on clique ca ouvre le modal
menu.onclick = function() {
  if(modal.style.display === "block"){
    modal.style.display = "none"
  }
  else{
    modal.style.display = "block"
  }
}
//si on clique sur contact dans le menu burger le modal se display none//
menu_contact.onclick = function (){
  modal.style.display = "none"
  menu.checked = false;
}

