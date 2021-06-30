//#region Imports
import React from 'react';
import './App.css';

import logo from "./logo.svg"
//#endregion Imports

function App() {
  return (
    <div className="app">
      <nav className="nav nav--top">
        <div className="content-wrapper content-wrapper--nav">
          <img src={logo} alt="offerzen logo" />
        </div>
      </nav>
      <main className="main">
        <div className="content-wrapper">
          <div className="subhead">
            <div className="count">7 interview requests</div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
