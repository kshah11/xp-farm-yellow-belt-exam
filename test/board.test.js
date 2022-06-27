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
});

describe('The first player', () => {
  test('should mark the board with an X', () => {
    const board = new TicTacToeBoard();
    const player = 'x';

    expect(board.turn(player)).toEqual(expect.arrayContaining([expect.arrayContaining(['x'])]));
  });
});
