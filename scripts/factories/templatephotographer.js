function templateDataPhotographer(data) {
  console.log("22222");
  console.log(data);
  console.log(data[0].id);

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

function templatePicturesPhotographer(data, photographe) {

  const photographersSection = document.querySelector("main");
  const $wrapper = document.createElement('section');
  $wrapper.classList.add('photograph-pictures');
  let card1 = `    <div class=trierPar>

  </div>
  <div class=photos>`;
  let card2 = "";
  data.forEach((ligne) => {
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