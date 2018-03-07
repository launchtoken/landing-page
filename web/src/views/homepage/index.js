import React, { Component } from "react";
import IMAGES from "assets/images";
import "./homepage.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={IMAGES.LOGO} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
