

async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        console.log(photographer);
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);


        document.querySelector(".photographer_section")
            .addEventListener("keydown", function (event) {
                event.preventDefault();
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

