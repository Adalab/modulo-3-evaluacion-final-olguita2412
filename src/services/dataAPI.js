function getDataApi() {
    return fetch(
      'http://hp-api.herokuapp.com/api/characters'
    )
      .then((response) => response.json())
      .then((data) => {
        const result = data.map((character) => {
          return {
            name: character.name,
            id: character.name,
            gender: character.gender,
            alternateNames: character.alternate_names,
            house: character.house,
            species: character.species,
            alive: character.alive,
            photo: character.image,
            patronus: character.patronus,
            ancestry: character.ancestry,
            wizard: character.wizard,
          }
        })
        return result;
      });
  }
  export default getDataApi;
  