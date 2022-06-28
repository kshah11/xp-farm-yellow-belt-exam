const TicTacToeBoard = require('../src/board');

describe('A game of Tic tac toe', () => {
  test('should start with an empty board', () => {
    const board = [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' '],
    ];
    expect(new TicTacToeBoard().board).toEqual(board);
  });

  test('should have a player mark the board with their symbol', () => {
    const board = new TicTacToeBoard();
    const player = 'x';

    expect(board.turn(player)).toEqual(expect.arrayContaining([expect.arrayContaining(['x'])]));
  });
});
