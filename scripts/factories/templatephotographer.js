function templateDataPhotographer(data) {
  console.log("22222");
  console.log(data);
  console.log(data[0].id);

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
  <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
  <img src=assets/photographers/${data[0].portrait}>`

  wrapper.innerHTML = card;
  test.textContent="tesgdfgdfgdfgdfgdgdfgdfgdgdt";
  sectionPhotographers.appendChild(test);
  sectionPhotographers.appendChild(wrapper);

}


function templateFiltre(){
  const filtre = document.querySelector('main');
  const wrapper = document.createElement('div');
  wrapper.classList.add('sortof');


  const scriptFilter=`
  <label>Trier par</label>
  <div class="filtre">
    <div value="option1" class="option1">
      <p id="option1">Popularité</p>
      <i class="fa-solid fa-chevron-up" id="option4"></i>
      <i class="fa-solid fa-chevron-down" id="option5"></i>
    </div>
    <div class="line" id="option8"></div>
    <div value="option2" class="option2">
      <p id="option2">Date</p>
      <i class="fa-solid fa-chevron-up" id="option10"></i>
      <i class="fa-solid fa-chevron-down" id="option6"></i>
    </div>
    <div class="line" id="option9"></div>
    <div value="option3" class="option3">
      <p id="option3">Titre</p>
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

  const card = `<div class="photograph-informations">
      <h1>${data[0].name}</h1>
      <div class="photograph-cadre">
      <h2>${data[0].city}</h2>
      <p>${data[0].tagline}</p>
      </div>
    </div>
    <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
    <img src=assets/photographers/${data[0].portrait}>`

  $wrapper.innerHTML = card;
  photographersSection.appendChild($wrapper);


}

function templatePicturesPhotographer(data, photographe,order) {

console.log(data+" "+photographe+" "+order);
  const photographersSection = document.querySelector("main");
  const $wrapper = document.createElement('section');
  $wrapper.classList.add('photograph-pictures');
  let card1 = `    <div class=trierPar>

  </div>
  <div class=photos>`;
  let card2 = "";

  switch (order) {
    case 1:
      console.log('AZERTYUIOP')
      data.sort((a, b) => (b.likes > a.likes ? 1 : -1));
      break;
    case 2:
      break;
    case 3:
      break;
      }
  
  console.log(data);
  data.forEach((ligne) => {
    console.log(`info images : ${ligne}`);
    card2 = card2 + `<div class=photos-card>
      <div class=photos-image>
      <img src=assets/pictures/${photographe.replace(' ', '-')}/${ligne.image}>
      </div>
      <div class=photos-content>
      <h3>${ligne.title}</h3>
      <p>${ligne.likes}</p>
      <i class="fa-solid fa-heart"></i>
      </div>
    </div>`;
  });
  let card = card1 + card2 + `</div>`;
  $wrapper.innerHTML = card;
  photographersSection.appendChild($wrapper);
}