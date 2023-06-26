/* eslint-disable no-unused-vars */
function displayModal(photographer) {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "block";
    document.getElementById("lePhotographe").innerHTML = photographer;

    document.addEventListener('keydown', keyEventListener);

}

function keyEventListener(e){
if (e.key == "Escape") closeModal();
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    document.formContactMe.reset();
    modal.style.display = "none";
}

const inputLN = document.getElementById("inputLastName");
const inputFN = document.getElementById("inputFirstName");
const inputEmail = document.getElementById("inputEmail");

const submitButton = document.querySelector(".contact_button");

submitButton.addEventListener("click", function() {
  console.log(inputLN.value);
  console.log(inputFN.value);
  console.log(inputEmail.value);
  closeModal();
});