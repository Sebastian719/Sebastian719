// Definición del controlador
const controller = {
    init() {
      this.getCharacters();
    },
  
    async getCharacters() {
      const timestamp = Date.now();
      const hash = CryptoJS.MD5(`${timestamp}${model.privateKey}${model.publicKey}`).toString();
  
      try {
        const response = await axios.get(`${model.baseUrl}?apikey=${model.publicKey}&ts=${timestamp}&hash=${hash}`);
        model.characters = response.data.data.results;
        view.displayCharacters();
      } catch (error) {
        console.error('Error al obtener los personajes:', error);
      }
    },
  
    getCharactersData() {
      return model.characters;
    },
  };
  