function getPokedex(initialData) {

  const getPokemonByName = buildGetPokemonByName();
  Object.defineProperty(pokedex, "names", { get: getPokemonNames() });

  const pokemons = [
    {
      evolutions: ['Bulbasaur','Ivysaur','Venusaur'],
      toEvolve: [25,100],
    },
    {
      evolutions: ['Charmander','Charmeleon','Charizard'],
      toEvolve: [25,100],
    },
    {
      evolutions: ['Squirtle','Wartortle','Blastoise'],
      toEvolve: [25,100],
    },
    {
      evolutions: ['Caterpie','Metapod','Butterfree'],
      toEvolve: [12,50],
    },
    {
      evolutions: ['Weedle','Kakuna','Beedrill'],
      toEvolve: [12,50],
    },
    {
      evolutions: ['Pidgey','Pidgeotto','Pidgeot'],
      toEvolve: [12],
    },
    {
      evolutions: ['Rattata','Raticate'],
      toEvolve: [25],
    },
    {
      evolutions: ['Spearow','Fearow'],
      toEvolve: [50],
    },
    {
      evolutions: ['Ekans','Arbok'],
      toEvolve: [50],
    },
    {
      evolutions: ['Pikachu','Raichu'],
      toEvolve: [50],
    },
    {
      evolutions: ['Sandshrew','Sandslash'],
      toEvolve: [50],
    },
    {
      evolutions: ['Nidoran ♀','Nidorina','Nidoqueen'],
      toEvolve: [25,100],
    },
    {
      evolutions: ['Nidoran ♂','Nidorino','Nidoking'],
      toEvolve: [25,100],
    },
    {
      evolutions: ['Clefairy','Clefable'],
      toEvolve: [50],
    },
    {
      evolutions: ['Vulpix','Ninetales'],
      toEvolve: [50],
    },
    {
      evolutions: ['Jigglypuff','Wigglytuff'],
      toEvolve: [50],
    },
    {
      evolutions: ['Zubat','Golbat'],
      toEvolve: [50],
    },
    {
      evolutions: ['Oddish','Gloom','Vileplume'],
      toEvolve: [25,100],
    },
    {
      evolutions: ['Paras','Parasect'],
      toEvolve: [50],
    },
    {
      evolutions: ['Venonat','Venomoth'],
    },
    {
      evolutions: ['Diglett','Dugtrio'],
      toEvolve: [50],
    },
    {
      evolutions: ['Meowth','Persian'],
      toEvolve: [50],
    },
    {
      evolutions: ['Psyduck','Golduck'],
      toEvolve: [50],
    },
    {
      evolutions: ['Mankey','Primeape'],
      toEvolve: [50],
    },
    {
      evolutions: ['Growlithe','Arcanine'],
      toEvolve: [50],
    },
    {
      evolutions: ['Poliwag','Poliwhirl','Poliwrath'],
      toEvolve: [25,100],
    },
    {
      evolutions: ['Abra','Kadabra','Alakazam'],
      toEvolve: [25,100],
    },
    {
      evolutions: ['Machop','Machoke','Machamp'],
      toEvolve: [25,100],
    },
    {
      evolutions: ['Bellsprout','Weepinbell','Victreebel'],
      toEvolve: [25,100],
    },
    {
      evolutions: ['Tentacool','Tentacruel'],
      toEvolve: [50],
    },
    {
      evolutions: ['Geodude','Graveler','Golem'],
      toEvolve: [25,100],
    },
    {
      evolutions: ['Ponyta','Rapidash'],
      toEvolve: [50],
    },
    {
      evolutions: ['Slowpoke','Slowbro'],
      toEvolve: [50],
    },
    {
      evolutions: ['Magnemite','Magneton'],
      toEvolve: [50],
    },
    {
      evolutions: ['Farfetch\'d'],
    },
    {
      evolutions: ['Doduo','Dodrio'],
      toEvolve: [50],
    },
    {
      evolutions: ['Seel','Dewgong'],
      toEvolve: [50],
    },
    {
      evolutions: ['Grimer','Muk'],
      toEvolve: [50],
    },
    {
      evolutions: ['Shellder','Cloyster'],
      toEvolve: [50],
    },
    {
      evolutions: ['Gastly','Haunter','Gengar'],
      toEvolve: [25,100],
    },
    {
      evolutions: ['Onix'],
    },
    {
      evolutions: ['Drowzee','Hypno'],
      toEvolve: [50],
    },
    {
      evolutions: ['Krabby','Kingler'],
      toEvolve: [50],
    },
    {
      evolutions: ['Voltorb','Electrode'],
      toEvolve: [50],
    },
    {
      evolutions: ['Exeggcute','Exeggutor'],
      toEvolve: [50],
    },
    {
      evolutions: ['Cubone','Marowak'],
      toEvolve: [50],
    },
    {
      evolutions: ['Hitmonlee'],
    },
    {
      evolutions: ['Hitmonchan'],
    },
    {
      evolutions: ['Lickitung'],
    },
    {
      evolutions: ['Koffing','Weezing'],
      toEvolve: [50],
    },
    {
      evolutions: ['Rhyhorn','Rhydon'],
      toEvolve: [50],
    },
    {
      evolutions: ['Chansey'],
    },
    {
      evolutions: ['Tangela'],
    },
    {
      evolutions: ['Kangaskhan'],
    },
    {
      evolutions: ['Horsea','Seadra'],
      toEvolve: [50],
    },
    {
      evolutions: ['Goldeen','Seaking'],
      toEvolve: [50],
    },
    {
      evolutions: ['Staryu','Starmie'],
    },
    {
      evolutions: ['Mime'],
    },
    {
      evolutions: ['Scyther'],
    },
    {
      evolutions: ['Jynx'],
    },
    {
      evolutions: ['Electabuzz'],
    },
    {
      evolutions: ['Magmar'],
    },
    {
      evolutions: ['Pinsir'],
    },
    {
      evolutions: ['Tauros'],
    },
    {
      evolutions: ['Magikarp','Gyarados'],
      toEvolve: [400],
    },
    {
      evolutions: ['Lapras'],
    },
    {
      evolutions: ['Ditto'],
    },
    {
      evolutions: ['Eevee'],
      toEvolve: [25],
    },
    {
      evolutions: ['Vaporeon'],
    },
    {
      evolutions: ['Jolteon'],
    },
    {
      evolutions: ['Flareon'],
    },
    {
      evolutions: ['Porygon'],
    },
    {
      evolutions: ['Omanyte','Omastar'],
      toEvolve: [50],
    },
    {
      evolutions: ['Kabuto','Kabutops'],
      toEvolve: [50],
    },
    {
      evolutions: ['Aerodactyl'],
    },
    {
      evolutions: ['Snorlax'],
    },
    {
      evolutions: ['Articuno'],
    },
    {
      evolutions: ['Zapdos'],
    },
    {
      evolutions: ['Moltres'],
    },
    {
      evolutions: ['Dratini','Dragonair','Dragonite'],
      toEvolve: [25,100],
    },
    {
      evolutions: ['Mewtwo'],
    },
  ];

  return pokedex;

  function pokedex(id) {
    return getPokemonByName(id);
  }

  function Pokemon({ name='', index=0, toEvolve=[], evolution=0, evolutions=[], owned=[], candy=0, store } = {}) {
    this.__store    = store;
    this.name       = name;
    this.evolutions = evolutions;
    this.index      = pokedex.names.indexOf(name) + 1;
    this.toEvolve   = toEvolve.slice(evolution)[0] ||  Infinity;
    this.evolution  = evolutions.slice(evolution + 1, evolution + 2)[0]  ||  null;
    Object.defineProperty(this, "candy", {
      set(to) {
        store.candy = parseInt(to);
      },
      get() {
        return store.candy || 0;
      },
    });
    Object.defineProperty(this, "owned", {
      set(to) {
        if (!store.owned) { store.owned = new Array(evolutions.length).fill(0) }
        store.owned[evolution] = parseInt(to);
      },
      get() {
        if (!store.owned) { store.owned = new Array(evolutions.length).fill(0) }
        return store.owned[evolution];
      },
    });
    this.evolvableCount = () => this.toEvolve ?
      Math.max(0, Math.min(this.owned, Math.floor((this.candy + (this.owned) - 1) / this.toEvolve))) :
      0;
  }

  function buildGetPokemonByName(id) {
    const storeO = {};
    const storeA = [];

    return id => {
      if (typeof id === 'number') { id = pokedex.names[id - 1]; }

      for (let i = 0, l = pokemons.length; i < l; i += 1) {
        if (pokemons[i].evolutions.includes(id)) {
          const pokemonData     = Object.assign({
            evolution: pokemons[i].evolutions.indexOf(id),
            name:      id,
            toEvolve:  pokemons[i].toEvolve || [],
            owned:     pokemons[i].owned,
            store:     pokemons[i],
          }, pokemons[i]);

          const pokemon = new Pokemon(pokemonData);

          return pokemon;
        }
      }
      return -1;
    }
  }

  function getPokemonNames() {
    const pokemonNames = [];

    return () => {
      if (pokemonNames.length) { return pokemonNames; }

      for (let i in pokemons) {
        pokemonNames.push(...pokemons[i].evolutions);
      }

      return pokemonNames;
    }
  }

}
