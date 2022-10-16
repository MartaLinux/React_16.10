// Get the modal
var modal = document.getElementById("myModal");
var modalText = document.getElementById("modalText");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var btn_cancel = document.getElementById("btn-cancel");
var btn_confirm = document.getElementById("btn-confirm");
var inputEmail = document.getElementById("InputEmail");
var mainContainer = document.getElementById("mainContainer");
var output= document.getElementById("output");
// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.classList.remove("hide")
  modal.classList.add("show")
  modalText.textContent+=inputEmail.value;
}

// When the user clicks on <span> (x), close the modal
btn_cancel.onclick = function() {
  modal.classList.remove("show")
  modal.classList.add("hide")
}
btn_confirm.onclick = function() {
    mainContainer.classList.remove("show")
    mainContainer.classList.add("hide")
    output.classList.remove("hide")
    output.classList.add("show")
    output.getElementsByClassName("text")[0].textContent+=inputEmail.value;
  }
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.classList.remove("show")
    modal.classList.add("hide")
  }
}
