// Selectors


var gridItem = document.querySelectorAll('.grid-item');


// Listeners


gridItem.forEach(function(el) {
  el.addEventListener('click', selectGridItem)
});


// Global variables



// Handlers

function selectGridItem(e) {
  player2.gridSelection.push(e.target.id);
  gridItem.innerHTML = `<img src="assets/image-from-rawpixel-id-2873787-original.png"/>`;
  console.log(player2);
}

function switchPlayer() {

}
