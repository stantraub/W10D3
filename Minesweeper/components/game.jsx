import React from 'react';
import ReactDOM from 'react-dom';
import Tile from './tile.jsx';
import * as Minesweeper from '../minesweeper.js';
import Board from './board.jsx'

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: new Minesweeper.Board(5, 10),
    };
    this.updateGame = this.updateGame.bind(this)
  }

  updateGame(tile, flagBool) {
    if (flagBool) {
      tile.toggleFlag();
      
    } else {
      tile.explore();
      
    }
    this.setState({ board: this.state.board });
  }

  render() {
    
    return (
      <div>
        <Board board={this.state.board} updateGame={this.updateGame}/>
      </div>
    );
  }

  

}

export default Game;