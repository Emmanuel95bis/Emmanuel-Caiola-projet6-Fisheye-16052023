/* eslint-disable no-undef */

//récupération des datas photographes pour la première page
async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");
    const index = 0;
    photographers.forEach((photographer) => {

        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM(index);
        photographersSection.appendChild(userCardDOM);


        const photographerSection = document.querySelector(".photographer_section");
        //activation de la touche entrer pour selectionner au clavier
        photographerSection.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                const href = event.target.getAttribute("href");
                window.location.href = href;
            }
        });
    });
}

async function init() {
    // Récupère les datas des photographes
    const photographers = await getPhotographers();

    displayData(photographers);
}

init();

