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
  if (game.currentPlayer.gridSelection.length < 5 && game.gridSelection.includes(event.target.id) === false) {
    placeToken(event);
    game.currentPlayer.gridSelection.push(event.target.id);
    game.gridSelection.push(event.target.id);
    game.changePlayer();
    checkWins();
    checkDraw();
    switchTurnHeading();
   }
   console.log(game.gridSelection);
}

function placeToken(event) {
  for (var i = 0; i < gridItem.length; i++) {
    if (gridItem[i].id === event.target.id) {
      gridItem[i].innerHTML = `<img src="${game.currentPlayer.token}"/>`
    }
  }
}

function switchTurnHeading() {
  playerOneTurn.classList.toggle('hidden');
  playerTwoTurn.classList.toggle('hidden');
}

function checkWins() {
  gridSectionOne();
  gridSectionTwo();
}

function gridSectionOne() {
  var oneGrid = game.playerOne.gridSelection;
  if (oneGrid.includes("one") && oneGrid.includes("two") && oneGrid.includes("three")) {
    incrementWinsOne();
  } else if (oneGrid.includes("four") && oneGrid.includes("five") && oneGrid.includes("six")) {
    incrementWinsOne();
  } else if (oneGrid.includes("seven") && oneGrid.includes("eight") && oneGrid.includes("nine")) {
    incrementWinsOne();
  } else if (oneGrid.includes("one") && oneGrid.includes("four") && oneGrid.includes("seven")) {
    incrementWinsOne();
  } else if (oneGrid.includes("two") && oneGrid.includes("five") && oneGrid.includes("eight")) {
    incrementWinsOne();
  } else if (oneGrid.includes("three") && oneGrid.includes("six") && oneGrid.includes("nine")) {
    incrementWinsOne();
  } else if (oneGrid.includes("one") && oneGrid.includes("five") && oneGrid.includes("nine")) {
    incrementWinsOne();
  } else if (oneGrid.includes("three") && oneGrid.includes("five") && oneGrid.includes("seven")) {
    incrementWinsOne();
  }
}

function gridSectionTwo() {
  var twoGrid = game.playerTwo.gridSelection;
  if (twoGrid.includes("one") && twoGrid.includes("two") && twoGrid.includes("three")) {
    incrementWinsTwo();
  } else if (twoGrid.includes("four") && twoGrid.includes("five") && twoGrid.includes("six")) {
    incrementWinsTwo();
  } else if (twoGrid.includes("seven") && twoGrid.includes("eight") && twoGrid.includes("nine")) {
    incrementWinsTwo();
  } else if (twoGrid.includes("one") && twoGrid.includes("four") && twoGrid.includes("seven")) {
    incrementWinsTwo();
  } else if (twoGrid.includes("two") && twoGrid.includes("five") && twoGrid.includes("eight")) {
    incrementWinsTwo();
  } else if (twoGrid.includes("three") && twoGrid.includes("six") && twoGrid.includes("nine")) {
    incrementWinsTwo();
  } else if (twoGrid.includes("one") && twoGrid.includes("five") && twoGrid.includes("nine")) {
    incrementWinsTwo();
  } else if (twoGrid.includes("three") && twoGrid.includes("five") && twoGrid.includes("seven")) {
    incrementWinsTwo();
  }
}

function checkDraw() {
  if (game.gridSelection.length === 9) {
    currentTurn.innerHTML = `<h1>It's a draw.</h1>`;
    setTimeout(() => { resetHtml(); }, 2000);
  }
}

function incrementWinsOne() {
  game.playerOne.wins += 1;
  currentTurn.innerHTML = `<h1>Player One Won!</h1>`;
  playerOneWins.innerHTML = `Player One Wins:<br>${game.playerOne.wins}</br>`;
  setTimeout(() => { resetHtml(); }, 2000);
}

function incrementWinsTwo() {
  game.playerTwo.wins += 1;
  currentTurn.innerHTML = `<h1>Player Two Won!</h1>`;
  playerTwoWins.innerHTML = `Player Two Wins:<br>${game.playerTwo.wins}</br>`;
  setTimeout(() => { resetHtml(); }, 2000);
}

function resetHtml() {
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
  game.changePlayer();
  game.playerOne.gridSelection = [];
  game.playerTwo.gridSelection = [];
  game.gridSelection = [];

}
