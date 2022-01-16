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


// Global variables


var game = new Game();


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

function checkDraw() {
  currentTurn.innerHTML = `<h1>It's a draw.</h1>`;
  setTimeout(() => { resetHtml(); }, 2000);
}

function incrementWins() {
  game.hasWinner = true;
  game.winner = game.currentPlayer;
  game.winner.wins += 1;
  newTurn();
  setTimeout(() => { resetHtml(); }, 2000);
}

function newTurn() {
  if (game.winner == game.playerOne) {
    currentTurn.innerHTML = `<h1>Player One Won!</h1>`;
    // playerOneWins.innerHTML = `Player One Wins:${this.playerOne.wins}`;
  } else if (game.winner == game.playerTwo) {
    currentTurn.innerHTML = `<h1>Player Two Won!</h1>`;
    // playerTwoWins.innerHTML = `Player Two Wins:${this.playerTwo.wins}`;
  }
}

function resetHtml() {
  if (game.winner == game.playerOne) {
    changeToTwo();
    currentTurn.innerHTML = `<h1>It's Player Two's Turn!</h1>`;
  } else if (game.winner == game.playerTwo) {
    changeToOne();
    currentTurn.innerHTML = `<h1>It's Player One's Turn!</h1>`;
  }

  gridContainer.innerHTML = `
  <div class="grid-item" id="one"></div>
  <div class="grid-item" id="two"></div>
  <div class="grid-item" id="three"></div>
  <div class="grid-item" id="four"></div>
  <div class="grid-item" id="five"></div>
  <div class="grid-item" id="six"></div>
  <div class="grid-item" id="seven"></div>
  <div class="grid-item" id="eight"></div>
  <div class="grid-item" id="nine"></div>
  `

  game.playerOne.gridSelection = [];
  game.playerTwo.gridSelection = [];
  game.gridSelection = [];
}

function changeToOne() {
  game.currentPlayer = game.playerOne;
}

function changeToTwo() {
  game.currentPlayer = game.playerTwo;
}
