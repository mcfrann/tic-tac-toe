class Game {
  constructor() {
    this.playerOne = new Player('one');
    this.playerTwo = new Player('two');
    this.currentPlayer = this.playerOne;
    this.gridSelection = [];
    this.draw = false;
  }

  changePlayer() {
    if (this.currentPlayer === this.playerOne) {
      this.currentPlayer = this.playerTwo;
    } else if (this.currentPlayer === this.playerTwo) {
      this.currentPlayer = this.playerOne;
    }
  }

  insertToken() {
    if (this.currentPlayer === this.playerOne) {
      this.playerOne.token = "assets/image-from-rawpixel-id-2873787-original.png";
    } else if (this.currentPlayer === this.playerTwo) {
      this.playerTwo.token = "assets/image-from-rawpixel-id-2873708-original.png";
    }
  }

  gridSectionOne() {
    if (this.playerOne.gridSelection.includes("one") && this.playerOne.gridSelection.includes("two") && this.playerOne.gridSelection.includes("three")) {
      this.playerOne.wins += 1;
      document.querySelector('.current-player').innerHTML = `<h1>Player One Won!</h1>`;
    } else if (this.playerOne.gridSelection.includes("four") && this.playerOne.gridSelection.includes("five") && this.playerOne.gridSelection.includes("six")) {
      this.playerOne.wins += 1;
      document.querySelector('.current-player').innerHTML = `<h1>Player One Won!</h1>`;
    } else if (this.playerOne.gridSelection.includes("seven") && this.playerOne.gridSelection.includes("eight") && this.playerOne.gridSelection.includes("nine")) {
      this.playerOne.wins += 1;
      document.querySelector('.current-player').innerHTML = `<h1>Player One Won!</h1>`;
    } else if (this.playerOne.gridSelection.includes("one") && this.playerOne.gridSelection.includes("four") && this.playerOne.gridSelection.includes("seven")) {
      this.playerOne.wins += 1;
      document.querySelector('.current-player').innerHTML = `<h1>Player One Won!</h1>`;
    } else if (this.playerOne.gridSelection.includes("two") && this.playerOne.gridSelection.includes("five") && this.playerOne.gridSelection.includes("eight")) {
      this.playerOne.wins += 1;
      document.querySelector('.current-player').innerHTML = `<h1>Player One Won!</h1>`;
    } else if (this.playerOne.gridSelection.includes("three") && this.playerOne.gridSelection.includes("six") && this.playerOne.gridSelection.includes("nine")) {
      this.playerOne.wins += 1;
      document.querySelector('.current-player').innerHTML = `<h1>Player One Won!</h1>`;
    } else if (this.playerOne.gridSelection.includes("one") && this.playerOne.gridSelection.includes("five") && this.playerOne.gridSelection.includes("nine")) {
      this.playerOne.wins += 1;
      document.querySelector('.current-player').innerHTML = `<h1>Player One Won!</h1>`;
    } else if (this.playerOne.gridSelection.includes("three") && this.playerOne.gridSelection.includes("five") && this.playerOne.gridSelection.includes("seven")) {
      this.playerOne.wins += 1;
      document.querySelector('.current-player').innerHTML = `<h1>Player One Won!</h1>`;
    }
  }

  gridSectionTwo() {
    if (this.playerTwo.gridSelection.includes("one") && this.playerTwo.gridSelection.includes("two") && this.playerTwo.gridSelection.includes("three")) {
      this.playerTwo.wins += 1;
      document.querySelector('.current-player').innerHTML = `<h1>Player Two Won!</h1>`;
    } else if (this.playerTwo.gridSelection.includes("four") && this.playerTwo.gridSelection.includes("five") && this.playerTwo.gridSelection.includes("six")) {
      this.playerTwo.wins += 1;
      document.querySelector('.current-player').innerHTML = `<h1>Player Two Won!</h1>`;
    } else if (this.playerTwo.gridSelection.includes("seven") && this.playerTwo.gridSelection.includes("eight") && this.playerTwo.gridSelection.includes("nine")) {
      this.playerTwo.wins += 1;
      document.querySelector('.current-player').innerHTML = `<h1>Player Two Won!</h1>`;
    } else if (this.playerTwo.gridSelection.includes("one") && this.playerTwo.gridSelection.includes("four") && this.playerTwo.gridSelection.includes("seven")) {
      this.playerTwo.wins += 1;
      document.querySelector('.current-player').innerHTML = `<h1>Player Two Won!</h1>`;
    } else if (this.playerTwo.gridSelection.includes("two") && this.playerTwo.gridSelection.includes("five") && this.playerTwo.gridSelection.includes("eight")) {
      this.playerTwo.wins += 1;
      document.querySelector('.current-player').innerHTML = `<h1>Player Two Won!</h1>`;
    } else if (this.playerTwo.gridSelection.includes("three") && this.playerTwo.gridSelection.includes("six") && this.playerTwo.gridSelection.includes("nine")) {
      this.playerTwo.wins += 1;
      document.querySelector('.current-player').innerHTML = `<h1>Player Two Won!</h1>`;
    } else if (this.playerTwo.gridSelection.includes("one") && this.playerTwo.gridSelection.includes("five") && this.playerTwo.gridSelection.includes("nine")) {
      this.playerTwo.wins += 1;
      document.querySelector('.current-player').innerHTML = `<h1>Player Two Won!</h1>`;
    } else if (this.playerTwo.gridSelection.includes("three") && this.playerTwo.gridSelection.includes("five") && this.playerTwo.gridSelection.includes("seven")) {
      this.playerTwo.wins += 1;
      document.querySelector('.current-player').innerHTML = `<h1>Player Two Won!</h1>`;
    }
  }
}
