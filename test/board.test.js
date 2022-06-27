const TicTacToeBoard = require('../src/board');

describe('A game of Tic tac toe', () => {
  it('should start with an empty board', () => {
    const board = [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' '],
    ];
    expect(new TicTacToeBoard().board).toEqual(board);
  });
});
