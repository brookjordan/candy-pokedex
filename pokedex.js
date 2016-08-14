const pokedex = {
  'Bulbasaur': new Pokemon({
    index: 1,
    toEvolve: 25,
    evolution: 'Ivysaur',
  }),
  'Ivysaur': new Pokemon({
    index: 2,
    toEvolve: 100,
    evolution: 'Venusaur',
  }),
  'Venusaur': new Pokemon({
    index: 3,
    toEvolve: null,
    evolution: null,
  }),
  'Charmander': new Pokemon({
    index: 4,
    toEvolve: 25,
    evolution: 'Charmeleon',
  }),
  'Charmeleon': new Pokemon({
    index: 5,
    toEvolve: 100,
    evolution: 'Charizard',
  }),
  'Charizard': new Pokemon({
    index: 6,
    toEvolve: null,
    evolution: null,
  }),
  'Squirtle': new Pokemon({
    index: 7,
    toEvolve: 25,
    evolution: 'Wartortle',
  }),
  'Wartortle': new Pokemon({
    index: 8,
    toEvolve: 100,
    evolution: 'Blastoise',
  }),
  'Blastoise': new Pokemon({
    index: 9,
    toEvolve: null,
    evolution: null,
  }),
  'Caterpie': new Pokemon({
    index: 10,
    toEvolve: 12,
    evolution: 'Metapod',
  }),
  'Metapod': new Pokemon({
    index: 11,
    toEvolve: 50,
    evolution: 'Butterfree',
  }),
  'Butterfree': new Pokemon({
    index: 12,
    toEvolve: null,
    evolution: null,
  }),
  'Weedle': new Pokemon({
    index: 13,
    toEvolve: 12,
    evolution: 'Kakuna',
  }),
  'Kakuna': new Pokemon({
    index: 14,
    toEvolve: 50,
    evolution: 'Beedrill',
  }),
  'Beedrill': new Pokemon({
    index: 15,
    toEvolve: null,
    evolution: null,
  }),
  'Pidgey': new Pokemon({
    index: 16,
    toEvolve: 12,
    evolution: 'Pidgeotto',
  }),
  'Pidgeotto': new Pokemon({
    index: 17,
    toEvolve: 50,
    evolution: 'Pidgeot',
  }),
  'Pidgeot': new Pokemon({
    index: 18,
    toEvolve: null,
    evolution: null,
  }),
  'Rattata': new Pokemon({
    index: 19,
    toEvolve: 25,
    evolution: 'Raticate',
  }),
  'Raticate': new Pokemon({
    index: 20,
    toEvolve: null,
    evolution: null,
  }),
  'Spearow': new Pokemon({
    index: 21,
    toEvolve: 50,
    evolution: 'Fearow',
  }),
  'Fearow': new Pokemon({
    index: 22,
    toEvolve: null,
    evolution: null,
  }),
  'Ekans': new Pokemon({
    index: 23,
    toEvolve: 50,
    evolution: 'Arbok',
  }),
  'Arbok': new Pokemon({
    index: 24,
    toEvolve: null,
    evolution: null,
  }),
  'Pikachu': new Pokemon({
    index: 25,
    toEvolve: 50,
    evolution: 'Raichu',
  }),
  'Raichu': new Pokemon({
    index: 26,
    toEvolve: null,
    evolution: null,
  }),
  'Sandshrew': new Pokemon({
    index: 27,
    toEvolve: 50,
    evolution: 'Sandslash',
  }),
  'Sandslash': new Pokemon({
    index: 28,
    toEvolve: null,
    evolution: null,
  }),
  'Nidoran (female)': new Pokemon({
    index: 29,
    toEvolve: 25,
    evolution: 'Nidorina',
  }),
  'Nidorina': new Pokemon({
    index: 30,
    toEvolve: 100,
    evolution: 'Nidoqueen',
  }),
  'Nidoqueen': new Pokemon({
    index: 31,
    toEvolve: null,
    evolution: null,
  }),
  'Nidoran (male)': new Pokemon({
    index: 32,
    toEvolve: 25,
    evolution: 'Nidorino',
  }),
  'Nidorino': new Pokemon({
    index: 33,
    toEvolve: 100,
    evolution: 'Nidoking',
  }),
  'Nidoking': new Pokemon({
    index: 34,
    toEvolve: null,
    evolution: null,
  }),
  'Clefairy': new Pokemon({
    index: 35,
    toEvolve: 50,
    evolution: 'Clefable',
  }),
  'Clefable': new Pokemon({
    index: 36,
    toEvolve: null,
    evolution: null,
  }),
  'Vulpix': new Pokemon({
    index: 37,
    toEvolve: 50,
    evolution: 'Ninetales',
  }),
  'Ninetales': new Pokemon({
    index: 38,
    toEvolve: null,
    evolution: null,
  }),
  'Jigglypuff': new Pokemon({
    index: 39,
    toEvolve: 50,
    evolution: 'Wigglytuff',
  }),
  'Wigglytuff': new Pokemon({
    index: 40,
    toEvolve: null,
    evolution: null,
  }),
  'Zubat': new Pokemon({
    index: 41,
    toEvolve: 50,
    evolution: 'Golbat',
  }),
  'Golbat': new Pokemon({
    index: 42,
    toEvolve: null,
    evolution: null,
  }),
  'Oddish': new Pokemon({
    index: 43,
    toEvolve: 25,
    evolution: 'Gloom',
  }),
  'Gloom': new Pokemon({
    index: 44,
    toEvolve: 100,
    evolution: 'Vileplume',
  }),
  'Vileplume': new Pokemon({
    index: 45,
    toEvolve: null,
    evolution: null,
  }),
  'Paras': new Pokemon({
    index: 46,
    toEvolve: 50,
    evolution: 'Parasect',
  }),
  'Parasect': new Pokemon({
    index: 47,
    toEvolve: null,
    evolution: null,
  }),
  'Venonat': new Pokemon({
    index: 48,
    toEvolve: null,
    evolution: null,
  }),
  'Venomoth': new Pokemon({
    index: 49,
    toEvolve: 50,
    evolution: 'Diglett',
  }),
  'Diglett': new Pokemon({
    index: 50,
    toEvolve: 50,
    evolution: 'Dugtrio',
  }),
  'Dugtrio': new Pokemon({
    index: 51,
    toEvolve: null,
    evolution: null,
  }),
  'Meowth': new Pokemon({
    index: 52,
    toEvolve: 50,
    evolution: 'Persian',
  }),
  'Persian': new Pokemon({
    index: 53,
    toEvolve: null,
    evolution: null,
  }),
  'Psyduck': new Pokemon({
    index: 54,
    toEvolve: 50,
    evolution: 'Golduck',
  }),
  'Golduck': new Pokemon({
    index: 55,
    toEvolve: null,
    evolution: null,
  }),
  'Mankey': new Pokemon({
    index: 56,
    toEvolve: 50,
    evolution: 'Primeape',
  }),
  'Primeape': new Pokemon({
    index: 57,
    toEvolve: null,
    evolution: null,
  }),
  'Growlithe': new Pokemon({
    index: 58,
    toEvolve: 50,
    evolution: 'Arcanine',
  }),
  'Arcanine': new Pokemon({
    index: 59,
    toEvolve: null,
    evolution: null,
  }),
  'Poliwag': new Pokemon({
    index: 60,
    toEvolve: 25,
    evolution: 'Poliwhirl',
  }),
  'Poliwhirl': new Pokemon({
    index: 61,
    toEvolve: 100,
    evolution: 'Poliwrath',
  }),
  'Poliwrath': new Pokemon({
    index: 62,
    toEvolve: null,
    evolution: null,
  }),
  'Abra': new Pokemon({
    index: 63,
    toEvolve: 25,
    evolution: 'Kadabra',
  }),
  'Kadabra': new Pokemon({
    index: 64,
    toEvolve: 100,
    evolution: 'Alakazam',
  }),
  'Alakazam': new Pokemon({
    index: 65,
    toEvolve: null,
    evolution: null,
  }),
  'Machop': new Pokemon({
    index: 66,
    toEvolve: 25,
    evolution: 'Machoke',
  }),
  'Machoke': new Pokemon({
    index: 67,
    toEvolve: 100,
    evolution: 'Machamp',
  }),
  'Machamp': new Pokemon({
    index: 68,
    toEvolve: null,
    evolution: null,
  }),
  'Bellsprout': new Pokemon({
    index: 69,
    toEvolve: 25,
    evolution: 'Weepinbell',
  }),
  'Weepinbell': new Pokemon({
    index: 70,
    toEvolve: 100,
    evolution: 'Victreebel',
  }),
  'Victreebel': new Pokemon({
    index: 71,
    toEvolve: null,
    evolution: null,
  }),
  'Tentacool': new Pokemon({
    index: 72,
    toEvolve: 50,
    evolution: 'Tentacruel',
  }),
  'Tentacruel': new Pokemon({
    index: 73,
    toEvolve: null,
    evolution: null,
  }),
  'Geodude': new Pokemon({
    index: 74,
    toEvolve: 25,
    evolution: 'Graveler',
  }),
  'Graveler': new Pokemon({
    index: 75,
    toEvolve: 100,
    evolution: 'Golem',
  }),
  'Golem': new Pokemon({
    index: 76,
    toEvolve: null,
    evolution: null,
  }),
  'Ponyta': new Pokemon({
    index: 77,
    toEvolve: 50,
    evolution: 'Rapidash',
  }),
  'Rapidash': new Pokemon({
    index: 78,
    toEvolve: null,
    evolution: null,
  }),
  'Slowpoke': new Pokemon({
    index: 79,
    toEvolve: 50,
    evolution: 'Slowbro',
  }),
  'Slowbro': new Pokemon({
    index: 80,
    toEvolve: null,
    evolution: null,
  }),
  'Magnemite': new Pokemon({
    index: 81,
    toEvolve: 50,
    evolution: 'Magneton',
  }),
  'Magneton': new Pokemon({
    index: 82,
    toEvolve: null,
    evolution: null,
  }),
  'Farfetch\'d': new Pokemon({
    index: 83,
    toEvolve: null,
    evolution: null,
  }),
  'Doduo': new Pokemon({
    index: 84,
    toEvolve: 50,
    evolution: 'Dodrio',
  }),
  'Dodrio': new Pokemon({
    index: 85,
    toEvolve: null,
    evolution: null,
  }),
  'Seel': new Pokemon({
    index: 86,
    toEvolve: 50,
    evolution: 'Dewgong',
  }),
  'Dewgong': new Pokemon({
    index: 87,
    toEvolve: null,
    evolution: null,
  }),
  'Grimer': new Pokemon({
    index: 88,
    toEvolve: 50,
    evolution: 'Muk',
  }),
  'Muk': new Pokemon({
    index: 89,
    toEvolve: null,
    evolution: null,
  }),
  'Shellder': new Pokemon({
    index: 90,
    toEvolve: 50,
    evolution: 'Cloyster',
  }),
  'Cloyster': new Pokemon({
    index: 91,
    toEvolve: null,
    evolution: null,
  }),
  'Gastly': new Pokemon({
    index: 92,
    toEvolve: 25,
    evolution: 'Haunter',
  }),
  'Haunter': new Pokemon({
    index: 93,
    toEvolve: 100,
    evolution: 'Gengar',
  }),
  'Gengar': new Pokemon({
    index: 94,
    toEvolve: null,
    evolution: null,
  }),
  'Onix': new Pokemon({
    index: 95,
    toEvolve: null,
    evolution: null,
  }),
  'Drowzee': new Pokemon({
    index: 96,
    toEvolve: 50,
    evolution: 'Hypno',
  }),
  'Hypno': new Pokemon({
    index: 97,
    toEvolve: null,
    evolution: null,
  }),
  'Krabby': new Pokemon({
    index: 98,
    toEvolve: 50,
    evolution: 'Kingler',
  }),
  'Kingler': new Pokemon({
    index: 99,
    toEvolve: null,
    evolution: null,
  }),
  'Voltorb': new Pokemon({
    index: 100,
    toEvolve: 50,
    evolution: 'Electrode',
  }),
  'Electrode': new Pokemon({
    index: 101,
    toEvolve: null,
    evolution: null,
  }),
  'Exeggcute': new Pokemon({
    index: 102,
    toEvolve: 50,
    evolution: 'Exeggutor',
  }),
  'Exeggutor': new Pokemon({
    index: 103,
    toEvolve: null,
    evolution: null,
  }),
  'Cubone': new Pokemon({
    index: 104,
    toEvolve: 50,
    evolution: 'Marowak',
  }),
  'Marowak': new Pokemon({
    index: 105,
    toEvolve: null,
    evolution: null,
  }),
  'Hitmonlee': new Pokemon({
    index: 106,
    toEvolve: null,
    evolution: null,
  }),
  'Hitmonchan': new Pokemon({
    index: 107,
    toEvolve: null,
    evolution: null,
  }),
  'Lickitung': new Pokemon({
    index: 108,
    toEvolve: null,
    evolution: null,
  }),
  'Koffing': new Pokemon({
    index: 109,
    toEvolve: 50,
    evolution: 'Weezing',
  }),
  'Weezing': new Pokemon({
    index: 110,
    toEvolve: null,
    evolution: null,
  }),
  'Rhyhorn': new Pokemon({
    index: 111,
    toEvolve: 50,
    evolution: 'Rhydon',
  }),
  'Rhydon': new Pokemon({
    index: 112,
    toEvolve: null,
    evolution: null,
  }),
  'Chansey': new Pokemon({
    index: 113,
    toEvolve: null,
    evolution: null,
  }),
  'Tangela': new Pokemon({
    index: 114,
    toEvolve: null,
    evolution: null,
  }),
  'Kangaskhan': new Pokemon({
    index: 115,
    toEvolve: null,
    evolution: null,
  }),
  'Horsea': new Pokemon({
    index: 116,
    toEvolve: 50,
    evolution: 'Seadra',
  }),
  'Seadra': new Pokemon({
    index: 117,
    toEvolve: null,
    evolution: null,
  }),
  'Goldeen': new Pokemon({
    index: 118,
    toEvolve: 50,
    evolution: 'Seaking',
  }),
  'Seaking': new Pokemon({
    index: 119,
    toEvolve: null,
    evolution: null,
  }),
  'Staryu': new Pokemon({
    index: 120,
    toEvolve: null,
    evolution: null,
  }),
  'Starmie': new Pokemon({
    index: 121,
    toEvolve: null,
    evolution: null,
  }),
  'Mime': new Pokemon({
    index: 122,
    toEvolve: null,
    evolution: null,
  }),
  'Scyther': new Pokemon({
    index: 123,
    toEvolve: null,
    evolution: null,
  }),
  'Jynx': new Pokemon({
    index: 124,
    toEvolve: null,
    evolution: null,
  }),
  'Electabuzz': new Pokemon({
    index: 125,
    toEvolve: null,
    evolution: null,
  }),
  'Magmar': new Pokemon({
    index: 126,
    toEvolve: null,
    evolution: null,
  }),
  'Pinsir': new Pokemon({
    index: 127,
    toEvolve: null,
    evolution: null,
  }),
  'Tauros': new Pokemon({
    index: 128,
    toEvolve: null,
    evolution: null,
  }),
  'Magikarp': new Pokemon({
    index: 129,
    toEvolve: 100,
    evolution: 'Gyarados',
  }),
  'Gyarados': new Pokemon({
    index: 130,
    toEvolve: null,
    evolution: null,
  }),
  'Lapras': new Pokemon({
    index: 131,
    toEvolve: null,
    evolution: null,
  }),
  'Ditto': new Pokemon({
    index: 132,
    toEvolve: null,
    evolution: null,
  }),
  'Eevee': new Pokemon({
    index: 133,
    toEvolve: 25,
    evolution: 'Vaporeon',
  }),
  'Vaporeon': new Pokemon({
    index: 134,
    toEvolve: null,
    evolution: null,
  }),
  'Jolteon': new Pokemon({
    index: 135,
    toEvolve: null,
    evolution: null,
  }),
  'Flareon': new Pokemon({
    index: 136,
    toEvolve: null,
    evolution: null,
  }),
  'Porygon': new Pokemon({
    index: 137,
    toEvolve: null,
    evolution: null,
  }),
  'Omanyte': new Pokemon({
    index: 138,
    toEvolve: 50,
    evolution: 'Omastar',
  }),
  'Omastar': new Pokemon({
    index: 139,
    toEvolve: null,
    evolution: null,
  }),
  'Kabuto': new Pokemon({
    index: 140,
    toEvolve: 50,
    evolution: 'Kabutops',
  }),
  'Kabutops': new Pokemon({
    index: 141,
    toEvolve: null,
    evolution: null,
  }),
  'Aerodactyl': new Pokemon({
    index: 142,
    toEvolve: null,
    evolution: null,
  }),
  'Snorlax': new Pokemon({
    index: 143,
    toEvolve: null,
    evolution: null,
  }),
  'Articuno': new Pokemon({
    index: 144,
    toEvolve: null,
    evolution: null,
  }),
  'Zapdos': new Pokemon({
    index: 145,
    toEvolve: null,
    evolution: null,
  }),
  'Moltres': new Pokemon({
    index: 146,
    toEvolve: null,
    evolution: null,
  }),
  'Dratini': new Pokemon({
    index: 147,
    toEvolve: 25,
    evolution: 'Dragonair',
  }),
  'Dragonair': new Pokemon({
    index: 148,
    toEvolve: 100,
    evolution: 'Dragonite',
  }),
  'Dragonite': new Pokemon({
    index: 149,
    toEvolve: null,
    evolution: null,
  }),
  'Mewtwo': new Pokemon({
    index: 150,
    toEvolve: null,
    evolution: null,
  }),
};

function Pokemon(options) {
  this.index     = options.index;
  this.toEvolve  = options.toEvolve;
  this.evolution = options.evolution;
  this.owned     = options.owned || {
                                      monster: 0,
                                      candy:   0,
                                    };
  this.evolvableCount = () => {
    return this.toEvolve ? Math.max(0, Math.min(this.owned.monster, Math.floor((this.owned.candy + (this.owned.monster) - 1) / this.toEvolve))) : 0;
  };
}
