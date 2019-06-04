//Constants Import
import { R2D2, OBI } from '../../constants.js';

const BuildGameBoardGrid = (rows, columns, r2d2Position, obiPosition) => {
  const gameBoardGrid = [];
  for (let gameRowIndex = 0; gameRowIndex < rows; gameRowIndex++){
    const gameRow = [];
    for(let columnRowIndex = 0; columnRowIndex < columns; columnRowIndex++){
      let rowValue = null;
      if(gameRowIndex === r2d2Position[1] && columnRowIndex === r2d2Position[0]){
        rowValue = R2D2;
      }
      else if (gameRowIndex === obiPosition[1] && columnRowIndex === obiPosition[0]) {
        rowValue = OBI;
      }
      gameRow.push(rowValue);
    }
    gameBoardGrid.push(gameRow);
  }
  return gameBoardGrid;
};

export default BuildGameBoardGrid;
