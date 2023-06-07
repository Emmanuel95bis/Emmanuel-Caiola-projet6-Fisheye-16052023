const chevronRight = document.querySelector('.fa-chevron-right');
const chevronLeft = document.querySelector('.fa-chevron-left');
const close = document.querySelector('.fa-times');
const addTitle = document.querySelector('.titre');



function getSize(media) {
    const img = document.getElementById(media);
    const width = img.clientWidth;
    const height = img.clientHeight;
    width < height ? img.setAttribute("class", "portrait") : img.setAttribute("class", "paysage");
}







function displayLightModal(imageNum, imageInOrder, lePhotographe) {


    document.getElementById("light_modal").style.display = "flex";
    document.querySelector("#light_modal_picture").innerHTML = '';
    document.querySelector("header").style.display = "none";
    document.querySelector("main").style.display = "none";

    compteur = 0;

    function displayTitle(titre){
        addTitle.innerHTML = titre;
        addTitle.setAttribute('aria-label',titre);
    }

  

    imageInOrder.forEach(element => {

        //insertion de toutes les photos en display "none" sauf l'élue
        if (element.image) {
            const img = document.createElement('img');
            img.src = `assets/pictures/${lePhotographe.replace(' ', '-')}/${element.image}`;
            img.setAttribute("id", `media${compteur}`);
            img.setAttribute("alt", element.title);
            img.style.display = "none";
            img.style.display = "flex";
            document.getElementById('light_modal_picture').appendChild(img);
            //insérer la classe paysage ou portrait en fonction de la taille de l'image
            getSize(`media${compteur}`);
            if(imageNum != compteur)  img.style.display = "none" 
            else{ img.style.display = "flex"
            displayTitle(element.title);
        };
        }

        if (element.video) {
            const mp4 = document.createElement("video");
            mp4.src = `assets/pictures/${lePhotographe.replace(' ', '-')}/${element.video}`;
            mp4.type = 'video/mp4';
            mp4.controls = true;
            mp4.setAttribute("id", `media${compteur}`);
            mp4.setAttribute("alt", element.title);
            if(imageNum != compteur) mp4.style.display = "none" 
            else{ mp4.style.display = "flex"
            displayTitle(element.title)
        };
            document.getElementById('light_modal_picture').appendChild(mp4);

        }
        compteur++;
  });

  //afficher image suivante
    const moveOnAfter = () => {
        document.getElementById(`media${imageNum}`).style.display = "none";
        imageNum++;
        if (imageNum > imageInOrder.length - 1) imageNum = 0;
        document.getElementById(`media${imageNum}`).style.display = "flex";
        displayTitle(imageInOrder[imageNum].title);
     }

//afficher image précédente     
    const moveOnBefore = () => {
        document.getElementById(`media${imageNum}`).style.display = "none";
        imageNum--;
        if (imageNum < 0) imageNum = imageInOrder.length - 1;
        document.getElementById(`media${imageNum}`).style.display = "flex";
        document.querySelector('.titre').innerHTML = imageInOrder[imageNum].title;
        displayTitle(imageInOrder[imageNum].title);
    }
 
    const closeLightModal = () => {
        document.getElementById("light_modal").style.display = "none";
        document.getElementById("light_modal_picture").innerHTML = "";
        chevronRight.removeEventListener("click", moveOnAfter);
        chevronLeft.removeEventListener("click", moveOnBefore);
        document.removeEventListener('keydown', keydownEventListener);
        document.querySelector("main").style.display = "block";
        document.querySelector("header").style.display = "block";
        document.querySelector('.titre').innerHTML = imageInOrder[imageNum].title;
        }

    function keydownEventListener(e) {

        if (e.key == "ArrowRight") {
            moveOnAfter();
        } else if (e.key == "ArrowLeft") {
            moveOnBefore();
        } else if (e.key == "Escape") {
            closeLightModal();
        }
    }

    document.addEventListener('keydown', keydownEventListener);
    chevronRight.addEventListener("click", moveOnAfter);
    chevronLeft.addEventListener("click", moveOnBefore);
    close.addEventListener("click", closeLightModal);

}
