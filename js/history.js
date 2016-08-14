const commandList = [];
const undo = document.querySelector('button');
undo.disabled = true;

commandList.push = function(commands) {
  undo.disabled = false;
 
  !Array.isArray(commands) && (commands = [commands]);
  commands.forEach(pushCommand);
  
  Array.prototype.push.call(commandList, commands);
}
undo.addEventListener('click', undoCommands);

window.addEventListener('keydown', e => {
  if (e.key.toLowerCase() === 'z' && (e.ctrlKey || e.metaKey)) {
    e.preventDefault();
    undoCommands();
  }
});

function pushCommand(command) {
  const pokemon = pokedex(command.pokemon);
  
  if (command.consumed.candy) {
    pokemon.candy -= command.consumed.candy;
    pokemon.evolutions.forEach(evolution => updateCandy(evolution));
  }
  if (command.consumed.monster) {
    pokemon.owned -= command.consumed.monster;
    pokemon.evolutions.forEach(evolution => updateOwned(evolution));
  }
  if (command.consumed.candy || command.consumed.monster) {
    pokemon.evolutions.forEach(evolution => updateEvolvable(evolution));
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
  const pokemon = pokedex(command.pokemon);

  pokemon.candy += command.consumed.candy;
  pokemon.owned += command.consumed.monster;

  pokemon.evolutions.forEach(evolution => {
    updateOwned(evolution);
    updateCandy(evolution);
    updateEvolvable(evolution);
  });
}
