import React, {Component} from 'react';
import Square from './Square';

class Board extends Component {

  constructor() {
    super();
    this.state = {
      counter: 0
    }
    this._boardClick = this._boardClick.bind(this)
  }

  _boardClick() {
    this.setState({counter: this.state.counter+1})
  }
  
  render() {
    return (
      <div className="boardDiv" onClick={this._boardClick}>
          <Square counter={this.state.counter} />
          <Square counter={this.state.counter} />
          <Square counter={this.state.counter} />
          <Square counter={this.state.counter} />
          <Square counter={this.state.counter} />
          <Square counter={this.state.counter} />
          <Square counter={this.state.counter} />
          <Square counter={this.state.counter} />
          <Square counter={this.state.counter} />
      </div>
    )
  }
}

export default Board;