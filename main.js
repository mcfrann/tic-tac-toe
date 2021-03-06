// Global variables

var game = new Game();

// Selectors

var gridItem = document.querySelectorAll('.grid-item');
var gridContainer = document.querySelector('.game-board-container');
var currentTurn = document.querySelector('.current-player');
var playerOneWins = document.querySelector('.plr-one-wins');
var playerTwoWins = document.querySelector('.plr-two-wins');

// Listeners

gridItem.forEach(function(el) {
  el.addEventListener('click', chooseSquare)
});

// Handlers

function chooseSquare(event) {
  if (checkGridInfo()) {
    updateGridSelection(event);
    placeToken(event);
    game.checkGrid();
    switchTurn();
  }
}

function checkGridInfo() {
  if (game.currentPlayer.gridSelection.length < 5 && !game.gridSelection.includes(event.target.id) && event.target.id !== "") {
    return true;
  } else {
    return false;
  }
}

function updateGridSelection(event) {
  game.currentPlayer.gridSelection.push(event.target.id);
  game.gridSelection.push(event.target.id);
}

function placeToken(event) {
  for (var i = 0; i < gridItem.length; i++) {
    if (gridItem[i].id === event.target.id) {
      gridItem[i].innerHTML = `<img src="${game.currentPlayer.token}"/>`
    }
  }
}

function switchTurn() {
  game.changePlayer();
  if (game.currentPlayer === game.playerOne && checkValidity()) {
    currentTurn.innerHTML = `
    <h1>It's Player One's Turn!</h1>
    `;
  } else if (game.currentPlayer === game.playerTwo && checkValidity()) {
    currentTurn.innerHTML = `
    <h1>It's Player Two's Turn!</h1>
    `;
  }
}

function checkValidity() {
  if (!game.winner && !game.isDraw) {
    return true;
  } else {
    return false;
  }
}

function incrementWins() {
  game.winner = game.currentPlayer;
  game.winner.wins += 1;
  newTurn();
  setTimeout(() => { resetGame(); }, 2000);
}

function checkDraw() {
  game.isDraw = true;
  newTurn();
  setTimeout(() => { resetGame(); }, 2000);
}

function newTurn() {
  if (game.winner === game.playerOne) {
    currentTurn.innerHTML = `<h1>Player One Won!</h1>`;
    playerOneWins.innerHTML = `Player One Wins:<br>${game.playerOne.wins}</br>`;
    game.changePlayer();
  } else if (game.winner === game.playerTwo) {
    currentTurn.innerHTML = `<h1>Player Two Won!</h1>`;
    playerTwoWins.innerHTML = `Player Two Wins:<br>${game.playerTwo.wins}</br>`;
    game.changePlayer();
  } else if (game.isDraw) {
    currentTurn.innerHTML = `<h1>It's a Draw.</h1>`;
  }
}

function resetGame() {
  game.isDraw = false;
  game.winner = "";
  switchTurn();
  refreshGameInfo();
}


function refreshGameInfo() {
  for (var i = 0; i < gridItem.length; i++) {
    gridItem[i].innerHTML = "";
  }
  game.playerOne.gridSelection = [];
  game.playerTwo.gridSelection = [];
  game.gridSelection = [];
}
