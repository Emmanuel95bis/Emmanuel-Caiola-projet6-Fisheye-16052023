
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




for (let i=0;i<11;i++){
chaine=`option${i+1}`;
chaine = document.querySelector(`#option${i+1}`);
}

function appearDisepear(tableau){
    let compteur=0;
    console.log("appearDisep");
    tableau.forEach(element =>{
        compteur=compteur+1;
        if (element==0){
            document.getElementById(`option${compteur}`).style.display = "none";
        }
        if (element==1){
            document.getElementById(`option${compteur}`).style.display = "flex";
        }

   });
    
}

 
  function modifyFiltre1() {
    console.log("111111111");
    let tableau1=[1,0,0,0,1,0,0,0,0];
    appearDisepear(tableau1);
  }
  function modifyFiltre2() {
    console.log("2222222");
    let tableau2=[0,1,0,0,0,1,0,0,0,0,0];
    appearDisepear(tableau2);
  }
  function modifyFiltre3() {
    console.log("3333333");
    let tableau3=[0,0,1,0,0,0,1,0,0,0,0];
    appearDisepear(tableau3);
  }

  function modifyFiltre4() {
    console.log("44444444");
 let tableau4=[1,0,0,0,1,0,0,0,0,0,0];
    appearDisepear(tableau4);
  }

  function modifyFiltre5() {
    console.log("5555555");
    let tableau5=[1,1,1,1,0,0,0,1,1,0,0];
    appearDisepear(tableau5);
  }

  function modifyFiltre6() {
    console.log("666666");
 let tableau6=[1,1,1,0,0,0,0,1,1,1,0];
    appearDisepear(tableau6);
  }

  function modifyFiltre7() {
    console.log("777777");
 let tableau7=[1,1,1,0,0,0,0,1,1,0,1];
    appearDisepear(tableau7);
  }
  

  function modifyFiltre10() {
    console.log("DDDDDDD");
 let tableau10=[0,1,0,0,0,1,0,0,0,0,0];
    appearDisepear(tableau10);
  }

    function modifyFiltre11() {
    console.log("OOOOOOOOO");
 let tableau11=[0,0,1,0,0,0,1,0,0,0,0];
    appearDisepear(tableau11);
  }


  // Ajouter un écouteur d'évènements à la table

option1.addEventListener('click', modifyFiltre1);
option2.addEventListener('click',modifyFiltre2);
option3.addEventListener('click',modifyFiltre3);
option4.addEventListener('click',modifyFiltre4);
option5.addEventListener('click',modifyFiltre5);
option6.addEventListener('click',modifyFiltre6);
option7.addEventListener('click',modifyFiltre7);
option10.addEventListener('click',modifyFiltre10);
option11.addEventListener('click',modifyFiltre11);

init();
modifyFiltre1();
