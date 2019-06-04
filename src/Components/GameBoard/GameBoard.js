import React from 'react';
//Style Import
import './GameBoard.scss';
//Component Imports
import GameSquare from '../GameSquare/GameSquare'

const GameBoard = ({gameBoardGrid, r2d2Direction}) => {
  return (
    <div className='gameBoardWrapper'>
      {gameBoardGrid.map((row, rowIndex) =>
        <div key={`boardRow-${rowIndex}`} className='boardRow'>
          {row.map((rowItem, columnIndex) =>
            <GameSquare
              key={`gameSquare-${columnIndex}`}
              rowItem={rowItem}
              columnIndex={columnIndex}
              r2d2Direction={r2d2Direction}
            />
          )}
        </div>
      )}
    </div>
  )
}

export default GameBoard;
