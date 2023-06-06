

function donner_focus(chp){
    console.log(chp);
    document.getElementById(chp).focus();
}

async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");
index=0;
    photographers.forEach((photographer) => {
       
        console.log(photographer);
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM(index);
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
         
            index++;

    });

};

async function init() {
    // Récupère les datas des photographes
    const photographers = await getPhotographers();

    displayData(photographers);
};

init();

