class Player {
  constructor(playerId) {
    this.id = playerId;
    this.token = '';
    this.wins = [];
  }

  whichPlayer() {
    if (this.id === 'one') {
      this.token = 'assets/image-from-rawpixel-id-2873787-original.png';
    } else if (this.id === 'two'){
      this.token = 'assets/image-from-rawpixel-id-2873708-original.png';
    }
  }
}
