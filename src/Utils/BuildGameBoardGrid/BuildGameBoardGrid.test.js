import BuildGameBoardGrid from './BuildGameBoardGrid';
import { R2D2, R2D2_DISPLAY_NAME, OBI, OBI_DISPLAY_NAME } from '../../constants.js';

test(`The game board has built the right sized grid and placed ${R2D2_DISPLAY_NAME} & ${OBI_DISPLAY_NAME} in the right locations.`, () => {
  expect(BuildGameBoardGrid(3, 3, [0,0], [1,1])).toEqual(
    [[R2D2,null,null],
      [null,OBI,null],
      [null,null,null]]
  );
});
