    async function getPhotographers() {
        // Ceci est un exemple de données pour avoir un affichage de photographes de test dès le démarrage du projet, 
        // mais il sera à remplacer avec une requête sur le fichier JSON en utilisant "fetch".
        // Récupération des pièces depuis le fichier JSON
const reponse = await fetch("/data/photographers.json");
const Dataphotographers = await reponse.json();
const photographers=Dataphotographers.photographers;
console.log("222222");
console.log(photographers);
   
return photographers            
    }

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            console.log(photographer);
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

    async function init() {
        // Récupère les datas des photographes
        const photographers = await getPhotographers();
      
        displayData(photographers);
    };
    
    init();
    
