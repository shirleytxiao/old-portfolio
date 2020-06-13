import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation';


class App extends Component {
  render() {
    return (
    <div>
        <div id="colorlib-main-nav">
            <Navigation></Navigation>
        </div>
    </div>
    );
  }
}

export default App;
