

async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");
    const index = 0;
    photographers.forEach((photographer) => {

        console.log(photographer);
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM(index);
        photographersSection.appendChild(userCardDOM);


        const photographerSection = document.querySelector(".photographer_section");

        photographerSection.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                const href = event.target.getAttribute("href");
                console.log(href);
                window.location.href = href;
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

