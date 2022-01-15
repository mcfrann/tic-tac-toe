// var player1 = new Player('one');
// var player2 = new Player('two');

class Game {
  constructor() {
    this.playerOne = new Player('one', '1');
    this.playerTwo = new Player('two', '2');
    this.currentPlayer = this.playerOne;
    this.gridSelection = [];
    // this.players = [this.playerOne, this.playerTwo];
    this.draw = false;
  }

  changePlayer() {
    if (this.currentPlayer === this.playerOne) {
      this.currentPlayer = this.playerTwo;
    } else if (this.currentPlayer === this.playerTwo) {
      this.currentPlayer = this.playerOne;
    }
  }

  gridSection(player) {
    if (player.gridSelection.includes(1, 2, 3)) {
      player.wins ++;
    } else if (player.gridSelection.includes(4, 5, 6)) {
      player.wins ++;
    } else if (player.gridSelection.includes(7, 8, 9)) {
      player.wins ++;
    } else if (player.gridSelection.includes(1, 4, 7)) {
      player.wins ++;
    } else if (player.gridSelection.includes(2, 5, 8)) {
      player.wins ++;
    } else if (player.gridSelection.includes(3, 6, 9)) {
      player.wins ++;
    } else if (player.gridSelection.includes(1, 5, 9)) {
      player.wins ++;
    } else if (player.gridSelection.includes(3, 5, 7)) {
      player.wins ++;
    }

    // if (player.wins = 0) {
    //   this.draw = true;
    // }
  }
}

var players = []

// var game = new Game();


  // in main, what did player select... push to array
  // once clicked disable click on same space.. or event targeting

// grid selection is made,  parseInt(id) and push to gridSelection array

// var players = [
//   {player one}, {player two}
// ]

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
