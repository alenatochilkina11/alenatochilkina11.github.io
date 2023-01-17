var modal = document.getElementsByClassName("modal");
var link = document.getElementById("modal-link");
var close = document.getElementsByClassName("close-button");

link.onclick = function() {
  modal.style.display = "flex";
}

close.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}