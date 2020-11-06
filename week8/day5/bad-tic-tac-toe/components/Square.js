import React, {Component} from 'react';
import TokenX from './TokenX';
import TokenO from './TokenO';

class Square extends Component {
  constructor (props) {
    super(props);
    this.state = {
      empty: true,
      displayX: 'none', 
      displayO: 'none'
    }
    this._click = this._click.bind(this)
  }  

  _click() {
    if (this.state.empty === true) {
      this.setState({empty:false})
      if (this.props.counter % 2 === 0) {
        this.setState({displayX: 'block'});
      } else {
        this.setState({displayO: 'block'})
      }
    }
  }

  render () {
    return (
      <div className="square" onClick={this._click} >
        <TokenX display={this.state.displayX} />
        <TokenO display={this.state.displayO} />
      </div>
    )
  }
}

export default Square;