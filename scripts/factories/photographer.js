function photographerFactory(data) {
    const { name, portrait,tagline,price } = data;
console.log(`Name is : ${name}`)
console.log(`Portrait is : ${portrait}`)
console.log(`Tagline is : ${tagline}`)
console.log(`Price is : ${price}`)
    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const lienA=document.createElement('a');
        lienA.href="photographer.html";
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
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