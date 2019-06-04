import React, { useState } from 'react';
//Style Import
import './ControlBoardReport.scss';
//Constants Import
import {R2D2_DISPLAY_NAME, OBI_DISPLAY_NAME} from '../../constants';

const ControlBoardReport = ({r2d2Position, r2d2Direction, obiPosition, obiDirection}) => {
  const [isReporting, toggleReporting] = useState(true);
  return (
    <div className='controlBoardReportWrapper flexColBottom'>
      <img onClick={()=>{toggleReporting(!isReporting)}} src='./statusIcon.svg' className={`extraActionIcon ${!isReporting && 'inactive'}`} alt='reportingIcon' />
      <div className={`reportTextWrapper flexColLeft fullWidth ${isReporting ? 'fadeUp' : 'fadeDown'}`}>
        <span className='flex'>
          <span className='r2d2Text'>{R2D2_DISPLAY_NAME}&nbsp;</span>
          <span> is at <b className='r2d2Text'>{r2d2Position.toString()}</b> facing <b className='r2d2Text'>{r2d2Direction}</b></span>
        </span>
        <span className='flexStart flexWrap'>
          <span className='obiText'>{OBI_DISPLAY_NAME}&nbsp;</span>
          <span>is at <b className='obiText'>{obiPosition.toString()}</b> facing <b className='obiText'>{obiDirection}</b></span>
        </span>
      </div>
    </div>
  )
}

export default ControlBoardReport;
