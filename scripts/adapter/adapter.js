//récupèration des informations des photographes
async function getPhotographers() {
    const reponse = await fetch("/data/photographers.json");
    const Dataphotographers = await reponse.json();
    const photographers = Dataphotographers.photographers;
    return photographers
}


//recupération informations du photographe correspondant à l'ID
async function getThePhotographer(dataId) {
    const reponse = await fetch("/data/photographers.json");
    const Dataphotographers = await reponse.json();
    const photographers=Dataphotographers.photographers;
    const lePhotographe= photographers.filter(user => user.id == dataId);
console.log(`1111:${lePhotographe} `);
    return (lePhotographe);
    }

   /* async function getThePhotographer(dataId) {
        try {
            const reponse = await fetch("/data/photographers.json");
            console.log(`json : ${reponse}`);
          if (!reponse.ok) {
            throw new Error(`Erreur HTTP : ${reponse.status}`);
          }
          const json = await reponse.json();
          return json;
        }
        catch(error) {
          console.error(`Impossible d'obtenir les produits : ${error}`);
        }
      }
*/



    

    //recupération informations du photographe correspondant à l'ID
async function getThePictures(dataId) {
    const reponse = await fetch("/data/photographers.json");
    const Dataphotographers = await reponse.json();
    const photographers=Dataphotographers.photographers;
    const pictures=Dataphotographers.media;
    const lePhotographe= photographers.filter(user => user.id == dataId);
    const lesPhotos= pictures.filter(user => user.photographerId == dataId);
    return lesPhotos;
    }