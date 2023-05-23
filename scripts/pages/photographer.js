

//récupération de l'ID du photographe
const resultat = location.search.indexOf('=');
const thePhotographer = location.search.substring(resultat + 1);


//ouverture  modale contactez moi
async function opencontact() {
  const photographerData = await getThePhotographer(thePhotographer)
  displayModal(photographerData[0].name);
}

//ouverture light modale
function openLightModal(ImageNum, imageInOrder) {
  console.log("open light modal is now");
  console.log(ImageNum);
  console.log(imageInOrder);
  displayLightModal(ImageNum, imageInOrder);
}


//pointer les éléments des filtres et placer les écouteurs
//d'évènements
function activationFiltre() {
  for (let i = 1; i < 12; i++) {
    //chaine = `option${i}`;
    chaine = '';
    console.log(`chaine1 :${i} ${chaine}`);
    if ((i != 8) || (i != 9)) { chaine = document.querySelector(`#option${i}`) };
  }

  // Ajouter des écouteurs d'évènements pour le filtre
  option1.addEventListener('click', modifyFiltre1);
  option2.addEventListener('click', modifyFiltre2);
  option3.addEventListener('click', modifyFiltre3);
  option4.addEventListener('click', modifyFiltre4);
  option5.addEventListener('click', modifyFiltre5);
  option6.addEventListener('click', modifyFiltre6);
  option7.addEventListener('click', modifyFiltre7);
  option10.addEventListener('click', modifyFiltre10);
  option11.addEventListener('click', modifyFiltre11);

  //ajouter un écouteur d'évènement sur le bouton "contacter moi"
  const contactezMoi = document.querySelector(".contact_button");
  contactezMoi.addEventListener('click', opencontact);

  //lancer le filtre populaire par defaut
  modifyFiltre1();
}


async function init() {
  // Récupère les datas des photographes
  const photographerData = await getThePhotographer(thePhotographer);
  const pictures = await getThePictures(thePhotographer);

  //mise en page des informations du photographe
  templateDataPhotographer(photographerData);
  templateFiltre();
  activationFiltre();
};

//gestion de présence des éléments du menu filtre
//en fonction des écouteurs.
function appearDisepear(tableau) {
  let compteur = 0;
  console.log("appearDisep");
  tableau.forEach(element => {
    compteur = compteur + 1;
    if (element == 0) {
      document.getElementById(`option${compteur}`).style.display = "none";
    }
    if (element == 1) {
      document.getElementById(`option${compteur}`).style.display = "flex";
    }

  });

}

//fonction de configuration du filtre
async function modifyFiltre1() {
  let tableau1 = [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0];
  appearDisepear(tableau1);

  // ordonner les photos les plus populaires au moins populaires
  const photographerData = await getThePhotographer(thePhotographer);
  const pictures = await getThePictures(thePhotographer);
  templatePicturesPhotographer(pictures, photographerData[0].name, 1);
}

async function modifyFiltre2() {
  console.log("2222222");
  let tableau2 = [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0];
  appearDisepear(tableau2);
  // ordonner les photos par titre
  const photographerData = await getThePhotographer(thePhotographer);
  const pictures = await getThePictures(thePhotographer);
  templatePicturesPhotographer(pictures, photographerData[0].name, 2);

}

async function modifyFiltre3() {
  console.log("3333333");
  let tableau3 = [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0];
  appearDisepear(tableau3);

  // ordonner les photos par titre
  const photographerData = await getThePhotographer(thePhotographer);
  const pictures = await getThePictures(thePhotographer);
  templatePicturesPhotographer(pictures, photographerData[0].name, 3);
}

function modifyFiltre4() {
  console.log("44444444");
  let tableau4 = [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0];
  appearDisepear(tableau4);
}

function modifyFiltre5() {
  console.log("5555555");
  let tableau5 = [1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0];
  appearDisepear(tableau5);
}

function modifyFiltre6() {
  console.log("666666");
  let tableau6 = [1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0];
  appearDisepear(tableau6);
}

function modifyFiltre7() {
  console.log("777777");
  let tableau7 = [1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1];
  appearDisepear(tableau7);
}


function modifyFiltre10() {
  console.log("DDDDDDD");
  let tableau10 = [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0];
  appearDisepear(tableau10);
}

function modifyFiltre11() {
  console.log("OOOOOOOOO");
  let tableau11 = [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0];
  appearDisepear(tableau11);
}

init();




