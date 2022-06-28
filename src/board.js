const TicTacToeBoard = class TicTacToeBoard {
  constructor() {
    this.board = [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' '],
    ];
  }

  turn(player) {
    while (true) {
      const row = Math.floor(Math.random() * 3);
      const column = Math.floor(Math.random() * 3);
      if (this.board[row][column] === ' ') {
        this.board[row][column] = player;
        break;
      }
    }
    return this.board;
  }

  play() {
    const playerOne = 'X';
    const playerTwo = 'O';
    for (let index = 0; index < 9; index += 1) {
      if (index % 2 === 0) this.turn(playerOne);
      else this.turn(playerTwo);
    }
    return this.board;
  }
};

module.exports = TicTacToeBoard;
