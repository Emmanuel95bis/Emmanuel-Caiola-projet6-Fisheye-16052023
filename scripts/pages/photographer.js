//récupération de l'ID du photographe
function searchForId(data){
const resultat= data.indexOf('=');
return data.substr(resultat+1);
}


async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
};

async function init() {
    // récupération du code ID de l'adresse
    const thePhotographer=searchForId(location.search);

    // Récupère les datas des photographes
    const photographer = await getThePhotographer(thePhotographer);
    console.log("xxxxxx");
    console.log(photographer);
    console.log(photographer[0].id);
    const pictures = await getThePictures(thePhotographer);

    //mise en page des informations du photographe
    templateDataPhotographer(photographer);

    templatePicturesPhotographer(pictures,photographer[0].name) 

};

init();

