import React from 'react';
import ReactDOM from 'react-dom';

class Tile extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const flagged = e.altKey;
    this.props.updateGame(this.props.tile, flagged);
  }


  render() {
    return (
      <div className='tile'
      onClick={this.handleClick}
      ></div>
      

    );
  }


}

export default Tile;