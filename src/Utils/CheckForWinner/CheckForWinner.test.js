import CheckForWinner from './CheckForWinner';
import { R2D2_DISPLAY_NAME, OBI_DISPLAY_NAME } from '../../constants.js';

test(`${R2D2_DISPLAY_NAME} & ${OBI_DISPLAY_NAME} ARE NOT on the same grid location`, () => {
  expect(CheckForWinner([0,0], [0,1])).toBeFalsy()
});

test(`${R2D2_DISPLAY_NAME} & ${OBI_DISPLAY_NAME} ARE on the same grid location`, () => {
  expect(CheckForWinner([0,0], [0,0])).toBeTruthy()
});
