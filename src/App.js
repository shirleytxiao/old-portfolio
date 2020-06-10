import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation';
import Header from './components/header';
import About from './components/about';
import Services from './components/services';
import Work from './components/work';
import Footer from './components/footer';
import NSCPanel from './components/nsc-panel';
import NSCVideoEditor from './components/nsc-video-editor';
import NSCContentCamera from './components/nsc-content-camera';


class App extends Component {
  render() {
    return (
    <div>
        <div id="colorlib-main-nav">
            <Navigation></Navigation>
        </div>
        <div id="colorlib-page">
            <NSCPanel></NSCPanel>
            <NSCVideoEditor></NSCVideoEditor>
            <NSCContentCamera></NSCContentCamera>
        </div>
    </div>
    );
  }
}

export default App;
