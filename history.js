function pushCommand(command) {
  const pokemon = pokedex[command.pokemon];
  
  if (command.consumed.candy) {
    pokemon.owned.candy -= command.consumed.candy;
    updateCandy(command.pokemon);
  }
  if (command.consumed.monster) {
    pokemon.owned.monster -= command.consumed.monster;
    updateOwned(command.pokemon);
  }
  if (command.consumed.candy || command.consumed.monster) {
    updateEvolvable(command.pokemon);
  }
  
  save();
}

function undoCommands(e) {
  if (commandList.length) {
    let commands = commandList.pop();
    !Array.isArray(commands) && (commands = [commands]);
    commands.forEach(undoCommand);
  }
  
  if (!commandList.length) {
    undo.disabled = true;
  }
  
  save();
}

function undoCommand(command) {
  const pokemonName = command.pokemon;
  const pokemon     = pokedex[pokemonName];

  pokemon.owned.candy   += command.consumed.candy;
  pokemon.owned.monster += command.consumed.monster;

  updateOwned(pokemonName);
  updateCandy(pokemonName);
  updateEvolvable(pokemonName);
}
