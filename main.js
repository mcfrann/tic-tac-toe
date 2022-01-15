// Selectors


var gridContainer = document.querySelector('.game-board-container');
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
  if (game.currentPlayer.gridSelection.length < 5 && game.gridSelection.includes(e.target.id) === false) {
     game.currentPlayer.gridSelection.push(e.target.id);
     game.gridSelection.push(e.target.id);
     placeToken(e);
     game.changePlayer();
     game.gridSectionOne();
     game.gridSectionTwo();
     switchTurnHeading();
   }
}

function placeToken(e) {
  for (var i = 0; i < gridItem.length; i++) {
    if (gridItem[i].id === e.target.id) {
      gridItem[i].innerHTML = `<img src="${game.currentPlayer.token}"/>`
      console.log(game.currentPlayer.token);
    }
  }
}

function switchTurnHeading() {
  playerOneTurn.classList.toggle('hidden');
  playerTwoTurn.classList.toggle('hidden');
}
