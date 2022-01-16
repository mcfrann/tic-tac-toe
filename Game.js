class Game {
  constructor() {
    this.playerOne = new Player('one', "assets/image-from-rawpixel-id-2873787-original.png");
    this.playerTwo = new Player('two', "assets/image-from-rawpixel-id-2873708-original.png");
    this.currentPlayer = this.playerOne;
    this.gridSelection = [];
    this.hasWinner = false;
    this.winner = '';
    this.draw = false;
  }

  changePlayer() {
    if (this.currentPlayer === this.playerOne) {
      this.currentPlayer = this.playerTwo;
    } else if (this.currentPlayer === this.playerTwo) {
      this.currentPlayer = this.playerOne;
    }
  }

  checkGrid() {
    var oneGrid = this.currentPlayer.gridSelection;

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
      } else if (this.gridSelection.length === 9 && this.hasWinner === false) {
        this.draw = true;
        checkDraw();
      }
    }
    
}
