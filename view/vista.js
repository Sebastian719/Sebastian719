// Definición de la vista
const view = {
    displayCharacters() {
      const charactersContainer = document.getElementById('characters');
      charactersContainer.innerHTML = '';
  
      const characters = controller.getCharactersData();
      characters.forEach((character) => {
        const characterCard = `
          <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div class="card">
              <img src="${character.thumbnail.path}.${character.thumbnail.extension}" class="card-img-top" alt="${character.name}">
              <div class="card-body">
                <h5 class="card-title">${character.name}</h5>
                <p class="card-text">${character.description}</p>
              </div>
            </div>
          </div>
        `;
        charactersContainer.innerHTML += characterCard;
      });
    },
  };
  