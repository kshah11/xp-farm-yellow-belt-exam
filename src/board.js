const TicTacToeBoard = class TicTacToeBoard {
  constructor() {
    this.board = [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' '],
    ];
  }

  turn(player) {
    this.board = [
      [player, ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' '],
    ];
    return this.board;
  }
};

module.exports = TicTacToeBoard;
