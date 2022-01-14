// Selectors


var gridItem = document.querySelector('.grid-item');


// Listeners


gridItem.addEventListener('click', selectGridItem());


// Global variables


// blalalal


// Handlers

function selectGridItem(player, e) {
  player.gridSelection.push(e.target.id);
  console.log(player);
  gridItem.innerHTML += "";
}
