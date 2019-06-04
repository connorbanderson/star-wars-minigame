import R2d2Move from './R2d2Move';
import { R2D2, R2D2_DISPLAY_NAME, OBI_DISPLAY_NAME } from '../../constants.js';

const oldGameBoardGrid = [
  [null, null, null],
  [null, null, null],
  [null, null, R2D2]
];

const expectedNewGameBoard = [
  [R2D2, null, null],
  [null, null, null],
  [null, null, null]
];

test(`The gameBoardGrid Updates ${R2D2_DISPLAY_NAME} position.`, () => {
  expect(R2d2Move([0,0], [2,2], oldGameBoardGrid)).toEqual(expectedNewGameBoard)
});
