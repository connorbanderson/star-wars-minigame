
export const GAME_TYPE_FORCE = 'force';
export const GAME_TYPE_ORIGINAL = 'original';

export const R2D2 = 'r2d2';
export const R2D2_DISPLAY_NAME = 'R2-D2'
export const OBI = 'obi';
export const OBI_DISPLAY_NAME = 'Obi Wan Kenobi'

export const NORTH = 'North';
export const SOUTH = 'South';
export const EAST = 'East';
export const WEST = 'West';

export const ARROW_UP = 'ArrowUp'
export const ARROW_DOWN = 'ArrowDown'
export const ARROW_LEFT = 'ArrowLeft'
export const ARROW_RIGHT = 'ArrowRight'

export const DEFAULT_STATE = {
  gameBoardGrid: [],
  r2d2Position: [null, null],
  r2d2Direction: null,
  obiPosition: [null, null],
  obiDirection: null,
  rows: 100,
  columns: 100,
  isWinner: false,
  isGameActive: false,
  gameType: null,
  showAnimatedBackground: true
}
