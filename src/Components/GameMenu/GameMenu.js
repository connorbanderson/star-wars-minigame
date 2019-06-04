import React, { useState } from 'react';
//Style Import
import './GameMenu.scss';
//Constants Import
import {GAME_TYPE_FORCE, GAME_TYPE_ORIGINAL} from '../../constants';

const GameMenu = ({onGameStart}) => {
  const [isFadingOut, handleFadeOut] = useState(false);
  const delayStartGame = (gameType) => {
    handleFadeOut(true);
    setTimeout(()=>onGameStart(100, 100, gameType), 500);
  };
  return (
    <div className={`gameMenuWrapper flexColStart ${isFadingOut ? 'gameMenuFadeOut': null}`}>
      <div className='headerWrapper flexCol'>
        <img src='./starwarsLogo.svg' className='headerLogo' alt='starwarsLogo' />
      </div>
      <div className='flexCol'>
        <div
          onClick={()=>delayStartGame(GAME_TYPE_ORIGINAL)}
          className='button originalButton flex'>
            <span>Start Game</span>
        </div>
        <div onClick={()=>delayStartGame(GAME_TYPE_FORCE)}
          className='button flex forceButton'>
          <span>Use The Force</span>
        </div>
      </div>
    </div>
  )
}

export default GameMenu;
