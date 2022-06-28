const TicTacToeBoard = class TicTacToeBoard {
  constructor() {
    this.board = [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' '],
    ];
  }

  turn(player) {
    if (this.board[0][0] === ' ') this.board[0][0] = player;
    else this.board[1][0] = player;
    return this.board;
  }
};

module.exports = TicTacToeBoard;
