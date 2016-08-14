function updatePokedexData() {
  if (localStorage.getItem('pokedex')) {
    const pokeData = JSON.parse(localStorage.getItem('pokedex'));
    for (let pokemonName in pokeData) {
      pokedex[pokemonName].owned.candy   = pokeData[pokemonName][0];
      pokedex[pokemonName].owned.monster = pokeData[pokemonName][1];
    };
  }
  Object.keys(pokedex).forEach(updatePokemonData);
}

function updatePokemonData(pokemonName) {
  const pokemon = pokedex[pokemonName];
  const pokeDOM = pokemonElts[pokemonName];
  
  updateCandy(pokemonName);
  updateOwned(pokemonName);
  updateEvolvable(pokemonName);
}

function updateCandy(pokemonName) {
  pokemonElts[pokemonName].candy.innerHTML = pokedex[pokemonName].owned.candy;
}

function updateOwned(pokemonName) {
  pokemonElts[pokemonName].owned.innerHTML = pokedex[pokemonName].owned.monster;
}

function updateEvolvable(pokemonName) {
  pokemonElts[pokemonName].evolvable.innerHTML = pokedex[pokemonName].evolvableCount();
}

function save() {
  const owned = {};
  for(let pokemonName in pokedex) {
    const pokemon = pokedex[pokemonName];
    if (pokemon.owned.candy || pokemon.owned.monster) {
      owned[pokemonName] = [pokemon.owned.candy, pokemon.owned.monster];
    }
  }
  localStorage.setItem('pokedex', JSON.stringify(owned));
}
