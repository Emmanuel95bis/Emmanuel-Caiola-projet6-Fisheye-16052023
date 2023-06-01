function photographerFactory(data) {
    const { name, portrait,tagline,price,id } = data;
    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        lienID=`photographer.html?id=${id}`;
        const article = document.createElement( 'article' );

        //création du lien href pour l'image et le titre
        const lienA=document.createElement('a');
        lienA.href=lienID;
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        img.setAttribute("alt", `Photographe ${name}`)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;

        const p1 = document.createElement( 'P' );
        p1.textContent = tagline;
        const p2 = document.createElement( 'P' );
        p2.textContent = `${price}€`;
        lienA.appendChild(img);
        lienA.appendChild(h2);
        article.appendChild(lienA);
        article.appendChild(p1);
        article.appendChild(p2);
        return (article);
    }
    return { name, picture,tagline,price, getUserCardDOM }
}