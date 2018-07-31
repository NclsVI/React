import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    let getTime = () => {
      let d = new Date();
      let hours = d.getHours();
      let minutes = d.getMinutes();
      let seconds = d.getSeconds();

      return `${hours}:${minutes}:${seconds}`
    }
    
    return (
      <div className="App">
        <div class="clock">
          {getTime()}
        </div>

        <div class="theme">

        </div>
        
      </div>
    );
  }
}
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);

export default App;
