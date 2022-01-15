// Selectors


var gridItem = document.querySelectorAll('.grid-item');
var playerOneTurn = document.querySelector('.player-turn-one');
var playerTwoTurn = document.querySelector('.player-turn-two');


// Listeners


gridItem.forEach(function(el) {
  el.addEventListener('click', switchPlayer)
});


// Global variables


var game = new Game();


// Handlers


function switchPlayer(e) {
  if (game.gridSelection.length < 9) {
     game.gridSelection.push(game.currentPlayer.id);
     gridItem.innerHTML += `${game.currentPlayer.token}`;
     game.changePlayer();
     switchTurnHeading();
     console.log(game.gridSelection);
   }
}

function switchTurnHeading() {
  playerOneTurn.classList.toggle('hidden');
  playerTwoTurn.classList.toggle('hidden');
}
