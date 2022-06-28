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
};

module.exports = TicTacToeBoard;
