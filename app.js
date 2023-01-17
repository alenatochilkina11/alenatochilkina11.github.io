const modalContainer = document.getElementsById("modal-container");
const openLink = document.getElementById("modal-link");
const closeBtn = document.getElementsById("close-button");

openLink.addEventListener('click', () => {
  modalContainer.classList.add('show');
});

closeBtn.addEventListener('click', () => {
  modalContainer.classList.remove('show');
});
