// Selectors


var gridItem = document.querySelectorAll('.grid-item');
var playerOneTurn = document.querySelector('.player-turn-one');
var playerTwoTurn = document.querySelector('.player-turn-two');


// Listeners


gridItem.forEach(function(el) {
  el.addEventListener('click', selectGridItem)
});


// Global variables



// Handlers

function onClick() {

}

function selectGridItem(e) {
  gridItem.innerHTML = `<img src="assets/image-from-rawpixel-id-2873787-original.png"/>`;
  player1.gridSelection.push(e.target.id);
  playerOneTurn.classList.toggle('hidden');
  playerTwoTurn.classList.toggle('hidden');
  console.log(player1);
}

function whichToken(player) {
  if (player.id === 'one') {

  }
}
