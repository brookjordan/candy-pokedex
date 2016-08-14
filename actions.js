function catchPokemon(pokemonName) {
  const pokemon = pokedex[pokemonName];
  
  commandList.push({
    command: 'add candy',
    pokemon: pokemonName,
    consumed: {
      candy:   -3,
      monster:  -1,
    },
  });
}

function dispatchPokemon(pokemonName) {
  const pokemon = pokedex[pokemonName];
  
  if (pokemon.owned.monster) {
    commandList.push({
      command: 'defer',
      pokemon: pokemonName,
      consumed: {
        candy:   -1,
        monster:  1,
      },
    });
  }
}

function tryEvolvePokemon(pokemonName) {
  const pokemon = pokedex[pokemonName];
  
  if (pokemon.owned.candy + pokemon.owned.monster > pokemon.toEvolve) {
    evolvePokemon(pokemonName);
  }
}

function evolvePokemon(pokemonName) {
  const pokemon           = pokedex[pokemonName];
  const candyToConsume    = Math.min(pokemon.toEvolve, pokemon.owned.candy);
  const monstersToConsume = pokemon.toEvolve - candyToConsume + 1;
  
  commandList.push([
    {
      command: 'evolve from',
      pokemon: pokemonName,
      consumed: {
        candy:   candyToConsume,
        monster: monstersToConsume,
      },
    },
    {
      command: 'evolve to',
      pokemon: pokemon.evolution,
      consumed: {
        monster: -1,
        candy: 0,
      },
    },
  ]);
}
