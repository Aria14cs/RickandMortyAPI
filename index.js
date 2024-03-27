function characters(done) {
    const results = fetch("https://rickandmortyapi.com/api/character");
    results
        .then(Response => Response.json())
        .then(data => {
            done(data)
        });

}

characters(data => {
    data.results.forEach(personaje => {

        const divContainer = document.createRange().createContextualFragment(`
        <div class="container">
            <div class="containerImg">
             <img src="${personaje.image}" alt="personaje" class="img">
            </div>
            <div class="containerName">
             <h2 class="name">${personaje.name}</h2>
             <h3 class="species">${personaje.species}</h3>
           </div>
        </div>
        `

        );

        const section = document.querySelector("section");
        section.append(divContainer);


    });
});