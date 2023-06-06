

async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");
    const index = 0;
    photographers.forEach((photographer) => {

        console.log(photographer);
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM(index);
        photographersSection.appendChild(userCardDOM);

        //ajout d'un addeventlistener sur liens pour lancer la page du photographe
        document.querySelector(".photographer_section")
            .addEventListener("keydown", function (event) {
                console.log(event);
                if (event.key === "Enter") {
                    console.log(event.target.getAttribute("href"));
                    window.location.href = event.target.getAttribute("href");
                }
            });
    });
};

async function init() {
    // Récupère les datas des photographes
    const photographers = await getPhotographers();

    displayData(photographers);
};

init();

