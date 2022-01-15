// Selectors


var gridItem = document.querySelectorAll('.grid-item');
var playerOneTurn = document.querySelector('.player-turn-one');
var playerTwoTurn = document.querySelector('.player-turn-two');


// Listeners


gridItem.forEach(function(el) {
  el.addEventListener('click', switchPlayer)
});


// Global variables



// Handlers


// function selectGridItem(e) {
//   gridItem.innerHTML = ``;
//   for (var i = 0; i < gridItem.length; i++) {
//     gridItem[i].innerHTML = `hi`;
//   }
// }

function switchPlayer(e) {
  var game = new Game();

  game.currentPlayer.gridSelection.push(e.target.id);

  game.changePlayer();

  console.log(game.gridSelection);
  console.log(game.currentPlayer);

  switchTurnHeading();
}

function switchTurnHeading() {
  playerOneTurn.classList.toggle('hidden');
  playerTwoTurn.classList.toggle('hidden');
}
// function switchPlayer(e) {
//   var game = new Game();
//
//   if (game.currentPlayer.id === 'one') {
//     // game.playerOne.gridSelection.push(e.target.id);
//     game.gridSelection.push(game.currentPlayer.token);
//     game.changePlayer();
//   } else if (newGame.currentPlayer.id === 'two') {
//     game.gridSelection.push(game.currentPlayer.token);
//     game.changePlayer();
//     // game.playerTwo.gridSelection.push(e.target.id);
//   }

  // console.log(game.currentPlayer);
  // console.log(game.gridSelection);
  // console.log(game.playerOne.gridSelection);
  // console.log(game.playerTwo.gridSelection);

// }
