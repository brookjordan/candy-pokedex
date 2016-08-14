function updatePokedexData() {
  if (localStorage.getItem('pokedex')) {
    const pokeData = JSON.parse(localStorage.getItem('pokedex'));
    for (let pokemonName in pokeData) {
      const pokemon   = pokedex(pokemonName);
      const dataPiece = pokeData[pokemonName];

      pokemon.owned = dataPiece[0];
      if (pokemon.name === pokemon.evolutions[0]) {
        pokemon.evolutions.forEach(evolutionName => {
          const evolution = pokemon.name === evolutionName ? pokemon : pokedex(evolutionName);
          evolution.candy = dataPiece[1];
        });
      }
    };
  }
  pokedex.names.forEach(updatePokemonData);
}

function updatePokemonData(pokemonName) {
  const pokemon = pokedex(pokemonName);
  const pokeDOM = pokemonElts[pokemonName];
  
  updateCandy(pokemonName);
  updateOwned(pokemonName);
  updateEvolvable(pokemonName);
}

function updateCandy(pokemonName) {
  pokemonElts[pokemonName].candy.innerHTML = pokedex(pokemonName).candy;
}

function updateOwned(pokemonName) {
  const ownedCount = pokedex(pokemonName).owned;
  const elt        = pokemonElts[pokemonName];

  pokemonElts[pokemonName].owned.innerHTML = ownedCount;
  if (ownedCount) {
    elt.container.classList.add('pokemon--ready-to-transfer');
  } else {
    elt.container.classList.remove('pokemon--ready-to-transfer');
  }
}

function updateEvolvable(pokemonName) {
  const pokemon   = pokedex(pokemonName);
  const elt       = pokemonElts[pokemonName];
  const canEvolve = pokemon.evolvableCount();

  elt.evolvable.innerHTML = canEvolve;
  if (canEvolve) {
    elt.container.classList.add('pokemon--ready-to-evolve');
  } else {
    elt.container.classList.remove('pokemon--ready-to-evolve');
  }
}

function save() {
  const savedData = {};
  pokedex.names.forEach(pokemonName => {
    const pokemon          = pokedex(pokemonName);
    const isFirstEvolution = pokemon.name === pokemon.evolutions[0];
    if (pokemon.owned || (isFirstEvolution && pokemon.candy)) {
      savedData[pokemonName] = [pokemon.owned];
      if (pokemon.name === pokemon.evolutions[0]) {
        savedData[pokemonName][1] = pokemon.candy;
      }
    }
  });
  localStorage.setItem('pokedex', JSON.stringify(savedData));
}
