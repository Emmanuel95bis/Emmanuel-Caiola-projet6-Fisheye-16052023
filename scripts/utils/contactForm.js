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
    modal.style.display = "none";
}
