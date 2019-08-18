import React from "react";
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
            <input placeholder="Search" className="" />
          </div>
          {/* NAV */}
          <nav className="">
            <div className="nav-link-group">
              <a href="#" className="nav-link">
                Home
              </a>
              <a href="#" className="nav-link">
                Following
              </a>
              <a href="#" className="nav-link">
                @User
              </a>
              <a
                href="#"
                className="material-icons nav-link nav-link-round-hover"
              >
                textsms
              </a>
              <a
                href="#"
                className="material-icons nav-link nav-link-round-hover"
              >
                notifications
              </a>
              <a
                href="#"
                className="material-icons nav-link nav-link-round-hover"
              >
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
