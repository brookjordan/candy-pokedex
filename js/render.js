function renderPokemon() {
  pokedex.names.forEach(pokemonName => {
    const baseClass = 'pokemon';
    const pokemon = pokedex(pokemonName);
    const pokeDOM = {
      container: document.createElement('div'),
      name:      document.createElement('h1'),
      index:     document.createElement('p'),
      drop:      document.createElement('div'),
      candy:     document.createElement('p'),
      owned:     document.createElement('p'),
      evolvable: document.createElement('p'),
      catch:     document.createElement('button'),
      hatch:     document.createElement('button'),
      dispatch:  document.createElement('button'),
      evolve:    document.createElement('button'),
    };
    
    pokeDOM.container.className = `${baseClass}`;
    pokeDOM.index.className     = `${baseClass}__index`;
    pokeDOM.name.className      = `${baseClass}__name`;
    pokeDOM.candy.className     = `${baseClass}__candy`;
    pokeDOM.owned.className     = `${baseClass}__owned`;
    pokeDOM.evolvable.className = `${baseClass}__evolvable`;
    pokeDOM.drop.className      = `${baseClass}__drop`;
    pokeDOM.catch.className     = `${baseClass}__catch`;
    pokeDOM.hatch.className     = `${baseClass}__hatch`;
    pokeDOM.dispatch.className  = `${baseClass}__dispatch`;
    pokeDOM.evolve.className    = `${baseClass}__evolve`;
    
    pokeDOM.index.innerHTML = pokemon.index;
    pokeDOM.name.innerHTML  = pokemonName;
    
    pokeDOM.catch.addEventListener('click', () => catchPokemon(pokemonName));
    
    pokeDOM.dispatch.addEventListener('click', e => {
      e.preventDefault();
      dispatchPokemon(pokemonName);
    });
    
    if (pokemon.toEvolve) {
      pokeDOM.evolve.addEventListener('click', () => tryEvolvePokemon(pokemonName));
    }
    
    pokeDOM.container.appendChild(pokeDOM.index);
    pokeDOM.container.appendChild(pokeDOM.name);
    pokeDOM.container.appendChild(pokeDOM.owned);
    pokeDOM.container.appendChild(pokeDOM.drop);
    pokeDOM.container.appendChild(pokeDOM.candy);
    //pokeDOM.container.appendChild(pokeDOM.hatch);
    pokeDOM.container.appendChild(pokeDOM.evolvable);
    pokeDOM.container.appendChild(pokeDOM.evolve);
    pokeDOM.container.appendChild(pokeDOM.catch);
    pokeDOM.container.appendChild(pokeDOM.dispatch);


    if (pokemon.toEvolve < Infinity) {
      pokeDOM.container.classList.add(`${baseClass}--evolves`);
    }
    
    document.body.appendChild(pokeDOM.container);
   
    pokemonElts[pokemonName] = pokeDOM;
  });
}
