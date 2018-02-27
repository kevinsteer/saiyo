
<<<<<<< HEAD
// Close the dropdown if the user clicks outside of it
window.onclick=function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
=======
>>>>>>> b96e05c009cf9d50f357b2a5d5ba57f5fdb94947
