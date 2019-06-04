import React, { useState } from 'react';
//Style Import
import './ControlBoard.scss';
//Frontend Component Imports
import ControlBoardReport from '../ControlBoardReport/ControlBoardReport';
//Constants Import
import {NORTH, SOUTH, EAST, WEST} from '../../constants';

const ControlBoard = ({isR2d2, isObi, squareKey, onMoveForward, onLook, onRotateLeft, onRotateRight, r2d2Position, r2d2Direction, obiPosition, obiDirection}) => {
  const [moveSpaces, changeMoveSpaces] = useState(1);
  const canIncreaseMoveSpaces = moveSpaces < 99;
  const canDecreaseMoveSpaces = moveSpaces > 1;
  const handleRotateLeft = () => {
    const directionToLook = {
      [NORTH] : () => onLook(WEST),
      [SOUTH] : () => onLook(EAST),
      [EAST] : () => onLook(NORTH),
      [WEST] : () => onLook(SOUTH)
    };
    return directionToLook[r2d2Direction]();
  };
  const handleRotateRight = () => {
    const directionToLook = {
      [NORTH] : () => onLook(EAST),
      [SOUTH] : () => onLook(WEST),
      [EAST] : () => onLook(SOUTH),
      [WEST] : () => onLook(NORTH)
    };
    return directionToLook[r2d2Direction]();
  };
  return (
    <div className='ControlBoardWrapper flex'>
      <div className='flexColStart fullWidth'>
        <div className='flex fullWidth'>
          <div onClick={()=>onMoveForward(moveSpaces)} className='keycap flex'>
            <span>MOVE</span>
          </div>
        </div>
        <div className='flex fullWidth'>
          <div onClick={handleRotateLeft} className='keycap flex'>
            <i className='fas fa-arrow-left'/>
          </div>
          <div onClick={handleRotateRight} className='keycap flex'>
            <i className='fas fa-arrow-right' />
          </div>
        </div>
      </div>
      <div className='movementActionMenu'>
        <div className='numberContainer flex'>
          <span className='numberWrapper'>{moveSpaces}</span>
          <div className='flexCol'>
            <div onClick={() => canIncreaseMoveSpaces && changeMoveSpaces(moveSpaces + 1)} className={`arrowButton flex ${!canIncreaseMoveSpaces ? 'disabled' : null}`}>
              <i className='fas fa-arrow-up' />
            </div>
            <div onClick={() => canDecreaseMoveSpaces && changeMoveSpaces(moveSpaces - 1)} className={`arrowButton flex ${!canDecreaseMoveSpaces ? 'disabled' : null}`}>
              <i className='fas fa-arrow-down' />
            </div>
          </div>
        </div>
        <span className='moveDescription'># of Spaces to Move</span>
      </div>
      <ControlBoardReport
        r2d2Position={r2d2Position}
        r2d2Direction={r2d2Direction}
        obiPosition={obiPosition}
        obiDirection={obiDirection}
      />
    </div>
  )
}

export default ControlBoard;
