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
  const board = new TicTacToeBoard();
  test('should have a player mark the board with their symbol', () => {
    const player = 'X';

    expect(board.turn(player)).toEqual(expect.arrayContaining([expect.arrayContaining(['X'])]));
  });

  test('should have a second player mark the board their symbol', () => {
    const player = 'O';

    expect(board.turn(player)).toEqual(
      expect.arrayContaining([expect.arrayContaining(['O']), expect.arrayContaining(['X'])]),
    );
  });
  test('should have the two Xs and one O after 3 truns have passed', () => {
    const player = 'X';
    board.turn(player);
    const xLength = board.board.flat().filter((mark) => mark === 'X').length;
    const oLength = board.board.flat().filter((mark) => mark === 'O').length;
    expect(xLength).toEqual(oLength + 1);
  });

  test('can end when the board is filled', () => {
    const gameBoard = new TicTacToeBoard();
    expect(gameBoard.play()).not.toEqual(expect.arrayContaining([expect.arrayContaining([' '])]));
  });
  test('ends in a draw if no player marks the board with their symbol 3 times in a row', () => {
    const gameBoard = new TicTacToeBoard();
    gameBoard.board = [
      ['X', 'O', 'X'],
      ['O', 'X', 'O'],
      ['X', 'O', 'X'],
    ];
    expect(gameBoard.results()).toEqual('Draw');
  });
});

describe('A player wins the game', () => {
  test('if they mark the board with their symbol 3 times in a row', () => {
    const gameBoard = new TicTacToeBoard();
    gameBoard.board = [
      ['X', 'X', 'X'],
      ['O', ' ', 'O'],
      [' ', 'O', ' '],
    ];
    expect(gameBoard.results()).toEqual('X wins');
  });
  test('if they mark the board with their symbol 3 times in a column', () => {
    const gameBoard = new TicTacToeBoard();
    gameBoard.board = [
      ['X', 'O', 'X'],
      ['X', 'O', 'O'],
      [' ', 'O', 'X'],
    ];
    expect(gameBoard.results()).toEqual('O wins');
  });
});
