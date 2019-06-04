//Constants Import
import { R2D2 } from '../../constants.js';

const R2d2Move = (newR2d2Position, oldR2d2Position, oldGameBoardGrid) => {
  const newGameBoardGrid = [...oldGameBoardGrid];
  // Add r2d2 to new position in the grid
  newGameBoardGrid[newR2d2Position[1]].splice(newR2d2Position[0], 1, R2D2);
  // Remove r2d2 from old position in the grid
  newGameBoardGrid[oldR2d2Position[1]].splice(oldR2d2Position[0], 1, null);
  return newGameBoardGrid;
};

export default R2d2Move;
