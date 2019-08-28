import React from 'react';
import ReactDOM from 'react-dom';
import Game from './game.jsx';
import * as Minesweeper from '../minesweeper.js';
import Tile from './tile.jsx';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
 
    const board = this.props.board;
    return (
      <div className="board">{board.grid.map( (row, i) => {
       return (<div className="row" key={`row${i}`}>{row.map( (tile, j) => {
         return <Tile key={`${i}_${j}`} 
          tile={tile}
          updateGame={this.props.updateGame}
          className="tile" />
        })}</div>)
      })}
      </div>
    );
  }
}

export default Board;