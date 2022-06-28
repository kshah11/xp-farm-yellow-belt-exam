const PLAYER_ONE = 'X';
const PLAYER_TWO = 'O';
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
    for (let index = 0; index < 9; index += 1) {
      if (index % 2 === 0) this.turn(PLAYER_ONE);
      else this.turn(PLAYER_TWO);
    }
    return this.board;
  }

  results() {
    for (let index = 0; index < this.board.length; index += 1) {
      const { length } = this.board[index].filter((mark) => mark === PLAYER_ONE);
      if (length === 3) {
        return `${PLAYER_ONE} wins`;
      }
    }
    return '';
  }
};

module.exports = TicTacToeBoard;
