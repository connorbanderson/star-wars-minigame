import React, { useState } from 'react';
//Style Import
import './WinnerMenu.scss';

const WinnerMenu = ({onResetState}) => {
  const [isFadingOut, handleFadeOut] = useState(false);
  const delayResetState = () => {
    handleFadeOut(true)
    setTimeout(() => onResetState(), 800)
  };
  return (
    <div className={`gameMenuWrapper flexColSpaceAround ${isFadingOut ? 'gameMenuFadeOut': null}`}>
      <span className='winnerText'> Winner Winner Chicken Dinner! </span>
      <img src='./helloThere.gif' alt='foundR2D2'/>
      <div onClick={delayResetState} className='button originalButton flex'>
        <span>Back to Menu</span>
      </div>
    </div>
  )
}

export default WinnerMenu;
