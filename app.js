var modalContainer = document.getElementById("modal-container");
var openLink = document.getElementById("modal-link");
var closeBtn = document.getElementById("close-button");

console.log(openLink);

openLink.addEventListener('click', () => {
  modalContainer.classList.add('show');
});

closeBtn.addEventListener('click', () => {
  modalContainer.classList.remove('show');
});
