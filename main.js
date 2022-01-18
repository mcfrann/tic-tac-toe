// Global variables

var game = new Game();

// Selectors

var gridItem = document.querySelectorAll('.grid-item');
var gridContainer = document.querySelector('.game-board-container');
var playerOneTurn = document.querySelector('.player-turn-one');
var playerTwoTurn = document.querySelector('.player-turn-two');
var currentTurn = document.querySelector('.current-player');
var playerOneWins = document.querySelector('.plr-one-wins');
var playerTwoWins = document.querySelector('.plr-two-wins');

// Listeners

gridItem.forEach(function(el) {
  el.addEventListener('click', switchPlayer)
});

// Handlers

function switchPlayer(event) {
  if (game.currentPlayer.gridSelection.length < 5 && game.gridSelection.includes(event.target.id) === false && event.target.id !== "") {
    game.currentPlayer.gridSelection.push(event.target.id);
    game.gridSelection.push(event.target.id);
    placeToken(event);
    game.checkGrid();
    switchTurnHeading();
  }
}

function placeToken(event) {
  for (var i = 0; i < gridItem.length; i++) {
    if (gridItem[i].id === event.target.id) {
      gridItem[i].innerHTML = `<img src="${game.currentPlayer.token}"/>`
    }
  }
}

function switchTurnHeading() {
  game.changePlayer();
  if (game.currentPlayer === game.playerOne && !game.winner && !game.draw) {
    currentTurn.innerHTML = `
    <h1 class="player-turn-one">It's Player One's Turn!</h1>
    `;
  } else if (game.currentPlayer === game.playerTwo && !game.winner && !game.draw) {
    currentTurn.innerHTML = `
    <h1 class="player-turn-two">It's Player Two's Turn!</h1>
    `;
  }
}

function incrementWins() {
  game.hasWinner = true;
  game.winner = game.currentPlayer;
  game.winner.wins += 1;
  newTurn();
  setTimeout(() => { resetGame(); }, 2000);
}

function checkDraw() {
  game.draw = true;
  newTurn();
  setTimeout(() => { resetGame(); }, 2000);
}

function newTurn() {
  if (game.winner == game.playerOne) {
    currentTurn.innerHTML = `<h1 class="one-winner">Player One Won!</h1>`;
    playerOneWins.innerHTML = `Player One Wins:<br>${game.playerOne.wins}</br>`;
    game.currentPlayer = game.playerTwo;
  } else if (game.winner == game.playerTwo) {
    currentTurn.innerHTML = `<h1 class="two-winner">Player Two Won!</h1>`;
    playerTwoWins.innerHTML = `Player Two Wins:<br>${game.playerTwo.wins}</br>`;
    game.currentPlayer = game.playerOne;
  } else if (game.draw === true) {
    currentTurn.innerHTML = `<h1 class="draw">It's a Draw.</h1>`;
  }
}

function resetGame() {
  game.hasWinner = false;
  game.winner = "";
  game.draw = false;
  switchTurnHeading();
  refreshInnerHtml();
  refreshArrays();
}

function refreshInnerHtml() {
  for (var i = 0; i < gridItem.length; i++) {
    gridItem[i].innerHTML = "";
  }
}

function refreshArrays() {
  game.playerOne.gridSelection = [];
  game.playerTwo.gridSelection = [];
  game.gridSelection = [];
}
