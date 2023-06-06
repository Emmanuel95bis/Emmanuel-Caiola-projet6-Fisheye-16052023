

function templateDataPhotographer(data) {

  const sectionPhotographers = document.querySelector(".article");
  const wrapper = document.createElement('div')
  const test = document.createElement('p')
  wrapper.classList.add('photograph-header')

  const card = `<div class="photograph-informations">
    <h1>${data[0].name}</h1>
    <div class="photograph-cadre">
    <h2>${data[0].city}</h2>
    <p>${data[0].tagline}</p>
    </div>
  </div>
  <button role="contactez moi" class="contact_button" onclick="displayModal()">Contactez-moi</button>
  <img src=assets/photographers/${data[0].portrait}>`

  wrapper.innerHTML = card;
  test.textContent = "tesgdfgdfgdfgdfgdgdfgdfgdgdt";
  sectionPhotographers.appendChild(test);
  sectionPhotographers.appendChild(wrapper);
}


function templateFiltre() {
  const filtre = document.querySelector('main');
  const wrapper = document.createElement('div');
  wrapper.classList.add('sortof');


  const scriptFilter = `
  <label>Trier par</label>
  <div class="filtre">
    <div value="option1" class="option1" role="filtre par popularité date et titre">
      <p id="option1" aria-label="filtrer par popularité">Popularité</p>
      <i class="fa-solid fa-chevron-up" id="option4"></i>
      <i class="fa-solid fa-chevron-down" id="option5"></i>
    </div>
    <div class="line" id="option8"></div>
    <div value="option2" class="option2">
      <p id="option2" aria-label="filtrer par date">Date</p>
      <i class="fa-solid fa-chevron-up" id="option10"></i>
      <i class="fa-solid fa-chevron-down" id="option6"></i>
    </div>
    <div class="line" id="option9"></div>
    <div value="option3" class="option3">
      <p id="option3"  aria-label="filtrer par titre">Titre</p>
      <i class="fa-solid fa-chevron-up" id="option11"></i>
      <i class="fa-solid fa-chevron-down" id="option7"></i>
    </div>
  </div>
  `
  wrapper.innerHTML = scriptFilter;
  filtre.appendChild(wrapper);

}





function templateDataPhotographer(data) {

  const photographersSection = document.querySelector("main");
  const $wrapper = document.createElement('div')
  $wrapper.classList.add('photograph-header')

  const card = `<div class="photograph-informations" aria-label=”informations photographe”>
      <h1 aria-label=”Le nom du photographe>${data[0].name}</h1>
      <div class="photograph-cadre">
      <h2 aria-label=”son lieu d'habitation>${data[0].city}</h2>
      <p aria-label=”le principe du photographe>${data[0].tagline}</p>
      </div>
    </div>
    <button role="Bouton contactez moi" class="contact_button" onclick="displayModal()">Contactez-moi</button>
    <img alt="${data[0].name}" src=assets/photographers/${data[0].portrait}>`

  $wrapper.innerHTML = card;
  photographersSection.appendChild($wrapper);
}


function templatePicturesPhotographer(data, photographe, order) {
  //effacement de tous les éléments photos
  const elements = document.getElementsByClassName("photos");
  while (elements.length > 0) elements[0].remove();

  const photographersSection = document.querySelector("main");
  const $wrapper = document.createElement('section');
  $wrapper.classList.add('photograph-pictures');
  let card1 = `    <div class=trierPar>

  </div>
  <div class=photos>`;
  let card2 = "";

  switch (order) {
    case 1:
      //tri par popularité
      data.sort((a, b) => (b.likes > a.likes ? 1 : -1));
      break;
    case 2:
      //tri par date     
      data.sort((a, b) => (b.date > a.date) ? 1 : -1);

      break;
      break;
    case 3:
      //tri par titre      
      data.sort((a, b) => (a.title > b.title ? 1 : -1));
      break;
  }
  compteur = 0;
  likeCompteur = 0;
  data.forEach((ligne) => {
    compteur++;
    likeCompteur = likeCompteur + ligne.likes;
    card2 = card2 + `<div class=photos-card>
      <div class=photos-image>`

    if (ligne.image) card2 = card2 + `<img role="image" tabindex=${compteur} id="image${compteur}" alt="${ligne.title}" src=assets/pictures/${photographe.replace(' ', '-')}/${ligne.image}>`
    if (ligne.video) card2 = card2 + `<video role="vidéo" tabindex=${compteur} id="image${compteur}" alt="${ligne.title}" src=assets/pictures/${photographe.replace(' ', '-')}/${ligne.video} type="video/mp4">>`


    card2 = card2 + `
      </div>
      <div class=photos-content>
      <h3 aria-label="titre "${ligne.title} >${ligne.title}</h3>
      <p aria-label="Nombre de likes "${ligne.likes} id="p${compteur}">${ligne.likes}</p>
      <i role="coeur like" class="fa-solid fa-heart" id="${compteur}"></i>
      </div>
    </div>`;
  });

  card2 = card2 + `<div class="likesWindows"><h4>Total de likes</h3><p  class="totalLikes">${likeCompteur}</p></div>`;
  let card = card1 + card2 + `</div>`;
  $wrapper.innerHTML = card;
  photographersSection.appendChild($wrapper);



  //création des ecouteurs sur les médias et sur les likes
  compteur = 0;

  const likeArray = [];

  data.forEach((ligne) => {
    compteur++;
    likeArray[compteur] = 0;
    const num = compteur;

    document.getElementById(`image${compteur}`).addEventListener("click", function () { openLightModal(num, data); });
    
    document.getElementById(`${compteur}`).addEventListener("click", function (event) {
      ligne.likes += 1;
      //incrémentation du like selectionné à condition que celui ci n'est pas été déjà incrémenté
      if (likeArray[event.target.id] != 1){
      document.getElementById(`p${event.target.id}`).innerHTML = ligne.likes;
      likeCompteur++;
      document.querySelector(".totalLikes").innerHTML = likeCompteur;
      }
      likeArray[event.target.id] = 1;
      
      console.log(likeCompteur);
      
     });
  });
}


