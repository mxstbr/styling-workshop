import React, { Component } from 'react';
import './App.css';

class App extends Component {
  componentDidMount() {
    // Inject optimised version of image for screensize
    this.node.style['background-image'] = `url('https://img.gs/jztmrqvgzv/${window.innerWidth}x${window.innerHeight}/upload.wikimedia.org/wikipedia/commons/7/71/Surfer_Portrait_(12645956723).jpg')`
  }

  render() {
    return (
      <div className="App" ref={ref => this.node = ref}>
        <div className="App__overlay"></div>
        <h1>Welcome to React in Flip Flops! 🌴☀️🏄</h1>
      </div>
    );
  }
}

export default App;
