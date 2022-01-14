class Player {
  constructor(playerId) {
    this.id = playerId;
    this.token = '';
    this.wins = 0;
    this.gridSelection = [];
  }

  whichPlayer() {
    if (this.id === 'one') {
      this.token = 'assets/image-from-rawpixel-id-2873787-original.png';
    } else if (this.id === 'two'){
      this.token = 'assets/image-from-rawpixel-id-2873708-original.png';
    }
  }
}

var player1 = new Player('one');
var player2 = new Player('two');


// on click event in main that pushes id to gridSelection and then disables click on that id
// also on click switches to other player
// innerHTML in main that ${player1.token} or ${player2.token}
