function displayLightModal(ImageNum, imageInOrder) {
    console.log("insidelight modal is now");
    console.log(ImageNum);
    console.log(imageInOrder);

    document.getElementById("light_modal_picture").style.display = "block";
	
    const selection=document.getElementById("ImageSelect");
    
    if(imageInOrder.image[ImageNum]) chaine= `<img src=assets/pictures/Mimi-Keel/${imageInOrder.image[ImageNum]}>`
    if(imageInOrder.video[ImageNum]) chaine=`<video src=assets/pictures/Mimi-Keel/${imageInOrder.video[ImageNum]} type="video/mp4">`
    //${photographe.replace(' ', '-')}
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}
