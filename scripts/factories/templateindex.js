function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price, id } = data;
    const picture = `assets/photographers/${portrait}`;




    //fonction de création des élément du DOM de la page pricipale
    function getUserCardDOM(index) {

        //création du lien avec passage du code photographe dans l'adresse
        const lienID = `photographer.html?id=${id}`;
        const article = document.createElement('article');
        const lienA = document.createElement('a');
        lienA.href = lienID;
        article.setAttribute("id", `${index}`);
        const img = document.createElement('img');
        img.setAttribute("src", picture);
        img.setAttribute("alt", `Photographe ${name}`);
        const h2 = document.createElement('h2');
        h2.textContent = name;
        const p0 = document.createElement('P');
        p0.textContent = `${city}, ${country}`;
        const p1 = document.createElement('P');
        p1.textContent = tagline;
        const p2 = document.createElement('P');
        p2.textContent = `${price}€/jour`;
        lienA.appendChild(img);
        lienA.appendChild(h2);
        article.appendChild(lienA);
        article.appendChild(p0);
        article.appendChild(p1);
        article.appendChild(p2);
        return (article);
    }
    return { name, picture, tagline, price, getUserCardDOM }
}

