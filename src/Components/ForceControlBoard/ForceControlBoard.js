import React from 'react';
//Style Import
import './ForceControlBoard.scss';
//Frontend Component Imports
import ControlBoardReport from '../ControlBoardReport/ControlBoardReport';
//Constants Import
import {NORTH, SOUTH, EAST, WEST} from '../../constants.js';

const ForceControlBoard = ({moveNorth, moveSouth, moveEast, moveWest, r2d2Look, r2d2Position, r2d2Direction, obiPosition, obiDirection}) => {
  return (
    <div className='ForceControlBoardWrapper flex'>
      <div className='extraActionMenu flex'>
        <div className='flexCol'>
          <img onClick={()=>r2d2Look(WEST)} src='./lookLeft.svg' className='extraActionIcon' alt='lookWestIcon'/>
        </div>
        <div className='flexCol'>
          <img onClick={()=>r2d2Look(NORTH)} src='./lookUp.svg' className='extraActionIcon' alt='lookNorthIcon'/>
          <img onClick={()=>r2d2Look(SOUTH)} src='./lookDown.svg' className='extraActionIcon' alt='lookSouthIcon'/>
        </div>
        <div className='flexCol'>
          <img onClick={()=>r2d2Look(EAST)} src='./lookRight.svg' className='extraActionIcon' alt='lookEastIcon'/>
        </div>
      </div>
      <div className='flexCol fullWidth'>
        <div className='flex'>
          <div onClick={()=>moveNorth(1)} className='keycap flex'>
            <i className='fas fa-arrow-up' />
          </div>
        </div>
        <div className='flex fullWidth'>
          <div onClick={()=>moveWest(1)} className='keycap flex'>
            <i className='fas fa-arrow-left' />
          </div>
          <div onClick={()=>moveSouth(1)} className='keycap flex'>
            <i className='fas fa-arrow-down' />
          </div>
          <div onClick={()=>moveEast(1)} className='keycap flex'>
            <i className='fas fa-arrow-right' />
          </div>
        </div>
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

export default ForceControlBoard;
