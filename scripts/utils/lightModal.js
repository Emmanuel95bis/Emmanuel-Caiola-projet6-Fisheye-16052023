const chevronRight = document.querySelector('.fa-chevron-right');
const chevronLeft = document.querySelector('.fa-chevron-left');
const close = document.querySelector('.fa-times');



function displayLightModal(imageNum, imageInOrder, lePhotographe) {
    

    document.getElementById("light_modal").style.display = "block";

    document.querySelector("#light_modal_picture").innerHTML = '';

    document.querySelector("header").style.display = "none";
    document.querySelector("main").style.display = "none";

    compteur = 0;
   
    imageInOrder.forEach(element => {

        

        console.log(element);
        if (element.image) {
            const img = document.createElement('img');
            img.src = `assets/pictures/${lePhotographe.replace(' ', '-')}/${element.image}`;
            img.setAttribute("id", `media${compteur}`);
            img.setAttribute("alt", element.title);
            img.style.display = "none" ;
            console.log(`compteur :${compteur} numero image : ${imageNum}` );
            imageNum != compteur ? img.style.display = "none" : img.style.display = "block";
            document.getElementById('light_modal_picture').appendChild(img);
            }

        if (element.video) {
            const mp4 = document.createElement("video");
            mp4.src = `assets/pictures/${lePhotographe.replace(' ', '-')}/${element.video}`;
            mp4.type = 'video/mp4';
            mp4.controls = true;
            mp4.setAttribute("id", `media${compteur}`);
            mp4.setAttribute("alt", element.title);
            imageNum != compteur ? mp4.style.display = "none" : mp4.style.display = "block";
            document.getElementById('light_modal_picture').appendChild(mp4);
        }
        compteur++;
    });
    

    const moveOnAfter = () => {
        document.getElementById(`media${imageNum}`).style.display = "none";
        imageNum++;
        if (imageNum > imageInOrder.length - 1) imageNum = 0;
        document.getElementById(`media${imageNum}`).style.display = "block";
        
    }

    const moveOnBefore = () => {
  
        document.getElementById(`media${imageNum}`).style.display = "none";
        imageNum--;
        if (imageNum < 0) imageNum = imageInOrder.length - 1;
        document.getElementById(`media${imageNum}`).style.display = "block";
    }


    const closeLightModal = () => {
        document.getElementById("light_modal").style.display = "none";
       
        document.getElementById("light_modal_picture").innerHTML="";
    
        chevronRight.removeEventListener("click", moveOnAfter);
      
        document.querySelector("main").style.display = "block";
        document.querySelector("header").style.display = "block";

    }

    document.querySelector('.titre').innerHTML = imageInOrder[imageNum].title;


    chevronRight.addEventListener("click", moveOnAfter);
    chevronLeft.addEventListener("click", moveOnBefore);
    close.addEventListener("click", closeLightModal);
}

