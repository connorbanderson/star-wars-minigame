import React, { memo } from 'react';
//Style Import
import './GameSquare.scss';
//Constants Import
import {R2D2, OBI} from '../../constants.js';

const GameSquare = ({rowItem, columnIndex, r2d2Direction}) => {
    return(
      <div key={`gameSquare-${columnIndex}`} className='gameSquare flex'>
        {rowItem === R2D2 &&
          <div className='r2d2GameSquare flex'>
            <div className={`r2d2${r2d2Direction}`} />
          </div>
        }
        {rowItem === OBI &&
          <div className='obiGameSquare' />
        }
      </div>
    )
}

function areEqual(prevProps, nextProps) {
  const isR2d2Item = nextProps.rowItem === R2D2;
  const directionChanged = nextProps.r2d2Direction !== prevProps.r2d2Direction;
  const rowItemChanged = prevProps.rowItem === nextProps.rowItem;
  return (rowItemChanged && !(isR2d2Item && directionChanged));
}

export default memo(GameSquare, areEqual);
