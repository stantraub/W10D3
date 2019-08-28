import React from "react";
import ReactDOM from "react-dom";
import Minesweeper from "./minesweeper";
import Game from './components/game.jsx';

function Root() {
  return (
  <div><Game /></div>
  );
}


  document.addEventListener( 'DOMContentLoaded', () => {
    ReactDOM.render(<Root />, document.getElementById('root'));
  } );
