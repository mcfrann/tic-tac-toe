// Global variables

var game = new Game();

// Selectors

var gridContainer = document.querySelector('.game-board-container');
var gridItem = document.querySelectorAll('.grid-item');
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
  playerOneTurn.classList.toggle('hidden');
  playerTwoTurn.classList.toggle('hidden');
}

function incrementWins() {
  game.hasWinner = true;
  game.winner = game.currentPlayer;
  game.winner.wins += 1;
  newTurn();
  setTimeout(() => { resetGame(); }, 2000);
}

function checkDraw() {
  currentTurn.innerHTML = `<h1>It's a draw.</h1>`;
  setTimeout(() => { resetGame(); }, 2000);
}

function newTurn() {
  if (game.winner == game.playerOne) {
    currentTurn.innerHTML = `
    <h1>Player One Won!</h1>`;
    playerOneWins.innerHTML = `Player One Wins:<br>${game.playerOne.wins}</br>`;
  } else if (game.winner == game.playerTwo) {
    currentTurn.innerHTML = `<h1>Player Two Won!</h1>`;
    playerTwoWins.innerHTML = `Player Two Wins:<br>${game.playerTwo.wins}</br>`;
  }
}

function resetGame() {
  if (game.winner == game.playerOne) {
    game.currentPlayer = game.playerTwo;
    currentTurn.innerHTML = `<h1>It's Player Two's Turn!</h1>`;
  } else if (game.winner == game.playerTwo) {
    game.currentPlayer = game.playerOne;
    currentTurn.innerHTML = `<h1>It's Player One's Turn!</h1>`;
  }
  refreshInnerHtml();
  refreshArrays();
  game.hasWinner = false;
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
