// Get the modal
var modal = document.getElementById("menu_info");

// Get the button that opens the modal
var menu = document.getElementById("menu_burger");

var menu_contact = document.getElementById("contact_link");


// When the user clicks on the button, open the modal
menu.onclick = function() {
  if(modal.style.display === "block"){
    modal.style.display = "none"
  }
  else{
    modal.style.display = "block"
  }
}



menu_contact.onclick = function (){
  modal.style.display = "none"
  menu.checked = false;
}

  // window.onclick = function(event) {
  //   if (event.target == modal) {
  //     modal.style.display = "none";
  //   }
  // }


