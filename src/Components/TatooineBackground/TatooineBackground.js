import React, { memo } from 'react';
import './TatooineBackground.scss';

const TatooineBackground = ({showAnimatedBackground}) => {
    return(
      <img
        className='tatooineBackground'
        src={`./${showAnimatedBackground ? 'tatooineAnimated' : 'tatooine'}.svg`}
        alt='tatooineBackground'
      />
    )
};

// function areEqual(prevProps, nextProps) {
//   const isR2d2Item = nextProps.rowItem === R2D2;
//   const directionChanged = nextProps.r2d2Direction !== prevProps.r2d2Direction;
//   const rowItemChanged = prevProps.rowItem === nextProps.rowItem;
//   return (rowItemChanged && !(isR2d2Item && directionChanged));
// }

// export default memo(GameSquare, areEqual);

export default memo(TatooineBackground);
