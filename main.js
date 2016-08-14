const pokemonElts = {};
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

renderPokemon();
updatePokedexData();
