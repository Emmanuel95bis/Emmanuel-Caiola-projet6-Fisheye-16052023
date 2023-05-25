function displayLightModal(ImageNum,imageInOrder){
    ImageNum--;
    console.log("insidelight modal is now");
    console.log(ImageNum);
    console.log(imageInOrder);
    console.log(imageInOrder[ImageNum].image);
   
    document.getElementById("light_modal").style.display = "block";
 
    document.querySelector("#light_modal_picture").innerHTML = '';
 
    document.querySelector("header").style.display = "none";
    document.querySelector("main").style.display = "none";
    
    if (imageInOrder[ImageNum].image) {
        const img = document.createElement('img');
        img.src = `assets/pictures/Mimi-Keel/${imageInOrder[ImageNum].image}`;
        document.getElementById('light_modal_picture').appendChild(img);
    }

    if (imageInOrder[ImageNum].video) {
        const mp4 = document.createElement("video");
        mp4.src = `src=assets/pictures/Mimi-Keel/${imageInOrder[ImageNum].video}`;
        mp4.type='video/mp4';
        document.getElementById('light_modal_picture').appendChild(mp4);
    }
    //${photographe.replace(' ', '-')}

    document.getElementById("light_modal_picture")

}

function closeLightModal() {
    document.getElementById("light_modal").style.display = "none";
    document.querySelector("main").style.display = "block";
    document.querySelector("header").style.display = "block";    
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}
