function displayModal(photographer) {
    console.log('openmodal');
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
    document.getElementById("lePhotographe").innerHTML = photographer;
    /*const lePhotographe=document.querySelector('.lePhotographe');
    lePhotographe.innerHTML=photographer;*/

}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}
