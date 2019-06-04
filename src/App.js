import React, { Component } from 'react';
//Style Import
import './App.scss';
//Frontend Component Imports
import {
  GameBoard,
  ControlBoard,
  ForceControlBoard,
  GameMenu,
   WinnerMenu,
   TatooineBackground
 } from './Components'
//Constants Import
import {
    DEFAULT_STATE,
    GAME_TYPE_FORCE,
    GAME_TYPE_ORIGINAL,
    NORTH,
    SOUTH,
    EAST,
    WEST,
    ARROW_UP,
    ARROW_DOWN,
    ARROW_LEFT,
    ARROW_RIGHT
  } from './constants.js';
// Util Imports
import {
  BuildGameBoardGrid,
  R2d2Move,
  GenerateRandomStartDirection,
  GenerateRandomStartPosition,
  CheckForWinner
} from './Utils'

class App extends Component {

  state = {...DEFAULT_STATE};

  componentDidMount(){
    document.onkeyup = (e) => this.handleKeyPress(e);
  };

  handleResetState = () => {
    this.setState({...DEFAULT_STATE});
  };

  handleStartNewGame = (rows, columns, gameType) => {
    const r2d2Position = GenerateRandomStartPosition(rows, columns);
    const obiPosition = GenerateRandomStartPosition(rows, columns);
    const r2d2Direction = GenerateRandomStartDirection();
    const obiDirection = GenerateRandomStartDirection();
    this.setState({showAnimatedBackground: false})
    this.handleBuildBoard(rows, columns, r2d2Position, r2d2Direction, obiPosition, obiDirection, gameType);
  };

  handleBuildBoard = (rows, columns, r2d2Position, r2d2Direction, obiPosition, obiDirection, gameType) => {
    const gameBoardGrid = BuildGameBoardGrid(rows, columns, r2d2Position, obiPosition);
    this.setState({gameBoardGrid, r2d2Position, r2d2Direction, obiPosition, obiDirection, gameType, isGameActive: true});
  };

  handleCheckForWinner = (newR2d2Position) => {
    const isWinner = CheckForWinner(newR2d2Position, this.state.obiPosition);
    if (isWinner) {
      this.setState({isWinner: true});
    }
  };

  handleR2d2Move = (newR2d2Position, newR2D2Direction) => {
    const newGameBoardGrid = R2d2Move(newR2d2Position, this.state.r2d2Position, this.state.gameBoardGrid);
    this.setState({gameBoardGrid: newGameBoardGrid, r2d2Position: newR2d2Position, r2d2Direction: newR2D2Direction});
    this.handleCheckForWinner(newR2d2Position);
  };

  r2d2Look = (direction) => {
    this.setState({r2d2Direction: direction});
  };

  handleKeyPress = (e) => {
    if (this.state.gameType === GAME_TYPE_FORCE){
      const keyToPress = {
        [ARROW_UP] : () => this.handleMoveNorth(1),
        [ARROW_DOWN] : () => this.handleMoveSouth(1),
        [ARROW_LEFT] : () => this.handleMoveWest(1),
        [ARROW_RIGHT] : () => this.handleMoveEast(1),
      }
      return keyToPress[e.code] && keyToPress[e.code]();
    }
  }

  handleMoveEast = (numberOfSpaces) => {
    const newR2D2Position = this.state.r2d2Position[0] + numberOfSpaces;
    if (newR2D2Position < this.state.rows){
      this.handleR2d2Move([newR2D2Position, this.state.r2d2Position[1]], EAST);
    }
  };

  handleMoveWest = (numberOfSpaces) => {
    const newR2D2Position = this.state.r2d2Position[0] - numberOfSpaces;
    if (newR2D2Position >= 0){
      this.handleR2d2Move([newR2D2Position, this.state.r2d2Position[1]], WEST);
    }
  };

  handleMoveSouth = (numberOfSpaces) => {
    const newR2D2Position = this.state.r2d2Position[1] + numberOfSpaces;
    if (newR2D2Position < this.state.columns){
      this.handleR2d2Move([this.state.r2d2Position[0], newR2D2Position], SOUTH);
    }
  };

  handleMoveNorth = (numberOfSpaces) => {
    const newR2D2Position = this.state.r2d2Position[1] - numberOfSpaces;
    if (newR2D2Position >= 0){
      this.handleR2d2Move([this.state.r2d2Position[0], newR2D2Position], NORTH);
    }
  };

  handleMoveForward = (moveSpaces) => {
    const {r2d2Direction} = this.state;
    const directionToMove = {
      [NORTH] : () => this.handleMoveNorth(moveSpaces),
      [SOUTH] : () => this.handleMoveSouth(moveSpaces),
      [EAST] : () => this.handleMoveEast(moveSpaces),
      [WEST] : () => this.handleMoveWest(moveSpaces),
    }
    return directionToMove[r2d2Direction]();
  };

  render() {
    const {gameBoardGrid, isWinner, isGameActive, r2d2Position, r2d2Direction, obiPosition, obiDirection, gameType, showAnimatedBackground} = this.state;
    return (
      <div className="appWrapper noselect">
        <TatooineBackground showAnimatedBackground={showAnimatedBackground} />
        <div className='boardWrapper flexCol'>
          {isGameActive ?
            isWinner ?
             <WinnerMenu onResetState={this.handleResetState} /> :
             <GameBoard gameBoardGrid={gameBoardGrid} r2d2Direction={r2d2Direction}/> :
             <GameMenu onGameStart={this.handleStartNewGame}/>
          }
          {!isWinner && gameType === GAME_TYPE_ORIGINAL &&
            <ControlBoard
                isWinner={isWinner}
                onMoveForward={this.handleMoveForward}
                onLook={this.r2d2Look}
                r2d2Position={r2d2Position}
                r2d2Direction={r2d2Direction}
                obiPosition={obiPosition}
                obiDirection={obiDirection}
              />
            }
            {!isWinner && gameType === GAME_TYPE_FORCE &&
              <ForceControlBoard
                isWinner={isWinner}
                moveNorth={this.handleMoveNorth}
                moveSouth={this.handleMoveSouth}
                moveEast={this.handleMoveEast}
                moveWest={this.handleMoveWest}
                r2d2Look={this.r2d2Look}
                r2d2Position={r2d2Position}
                r2d2Direction={r2d2Direction}
                obiPosition={obiPosition}
                obiDirection={obiDirection}
              />
            }
        </div>
      </div>
    )
  }
}

export default App;
