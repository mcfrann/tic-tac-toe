// Selectors


var gridItem = document.querySelector('.grid-item');


// Listeners


gridItem.addEventListener('click', selectGridItem);


// Global variables



// Handlers

function selectGridItem(e) {
  player2.gridSelection.push(e.target.id);
  gridItem.innerHTML = `<img src="assets/image-from-rawpixel-id-2873787-original.png"/>`;
  console.log(player2);
}

function switchPlayer() {

}
