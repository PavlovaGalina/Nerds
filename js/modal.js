const modalButton = document.querySelector(".modal-button");
const modalPopup = document.querySelector(".modal");
const closeButton = document.querySelector(".close");

document.addEventListener("DOMContentLoaded", function() {
  modalPopup.classList.remove("modal-show");
  modalPopup.classList.add("modal-close");
});

modalButton.addEventListener("click", function (evt) {
  evt.preventDefault();
    modalPopup.classList.remove("modal-close");
    modalPopup.classList.add("modal-show");
});

closeButton.addEventListener("click", function (evt) {
  evt.preventDefault();
    modalPopup.classList.remove("modal-show");
    modalPopup.classList.add("modal-close");
});
