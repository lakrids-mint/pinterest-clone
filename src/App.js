import React from "react";
import "./App.scss";
import logo from "./assets/Pinterest-logo.png";
//import SearchBar from "./components/searchBar";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <div className="logo-container">
            <a href="#">
              <img src={logo} className="logo" />
            </a>
          </div>
          {/* INPUT FIELD */}
          <div className="input-container">
            <div className="material-icons search-icon">search</div>
            <input placeholder="Search" className="--stretch" />
          </div>
          {/* NAV */}
          <nav className="ma">
            <div className="btn-group">
              <a href="#" className="btn-link">
                Home
              </a>
              <a href="#" className="btn-link">
                Following
              </a>
              <a href="#" className="btn-link">
                @User
              </a>
              <a href="#" className="material-icons btn-link btn-icon">
                textsms
              </a>
              <a href="#" className="material-icons btn-link btn-icon">
                notifications
              </a>
              <a href="#" className="material-icons btn-link btn-icon">
                more_horiz
              </a>
            </div>
          </nav>
        </div>
      </header>

      <div className="container ">
        <div className="card">f</div>
        <div className="card">f</div>
        <div className="card">f</div>
        <div className="card">f</div>
        <div className="card">f</div>
      </div>
      <button>+</button>
      <button>?</button>
    </div>
  );
}

export default App;
