class Game {
  constructor(??) {
    this.currentPlayer = '';
    this.draw = false;
  }

  changePlayer(playerId) {
    var player = new Player(playerId);

    if (player.id === 'one') {
      this.currentPlayer = 'one';
    } else if (player.id === 'two') {
      this.currentPlayer = 'two';
    }
  }
}
  // in main, what did player select... plug into classes
  //if user selects this, this happens

  // if current player === playerOne, then playerTwoContainer
  //every other click switches players unless clicked same spot twice
  //turn grid spots into buttons, once clicked disable button.. or event targeting

var players = [
  {player one}, {player two}
]

// two player instances
// location clicked on grid (target.id ?)
// method in game that includes conditional
// counter for turns for each container
// conditional if turn of one player higher than the other player,
// it's other players turn

//main
//instantiate player one and two class
// when click, add icon via innerhtml to grid placement
// if three in row, increment game.winsOne or game.winsTwo
// conditional if win, innerhtml celebration message
