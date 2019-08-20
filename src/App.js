import React from "react";
import logo from "./assets/Pinterest-logo.png";
//import SearchBar from "./components/searchBar";

function App() {
  return (
    <div className="app grid">
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
              <div className="vl" />
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
        <div className="card-wrapper">
          <div className="card">
            <div className="img-container">
              <img src="https://placekitten.com/250/300" alt="som text" />
              <div className="overlay" />
              <div className="card-menu">
                <div className="input-combo-field">
                  <input className="input-combo" />
                  <div className="btn">
                    <p>Save</p>
                  </div>
                </div>
                <div className="card-links">
                  <a href="#" className="link-flex">
                    <span className="material-icons">open_in_new</span>
                    <span>linkname</span>
                  </a>
                  <a href="#" className="material-icons">
                    share
                  </a>
                </div>
              </div>
            </div>
            <div className="card-info">
              <h1>a title</h1>
              <a
                href="#"
                className="material-icons nav-link nav-link-round-hover"
              >
                more_horiz
              </a>
            </div>
          </div>
        </div>

        <div className="card-wrapper">
          <div className="card">
            <div className="img-container">
              <img src="https://placekitten.com/100/300" alt="som text" />
              <div className="overlay" />
              <div className="card-menu">
                <div className="input-combo-field">
                  <input className="input-combo" />
                  <div className="btn">
                    <p>Save</p>
                  </div>
                </div>
                <div className="card-links">
                  <a href="#" className="link-flex">
                    <span className="material-icons">open_in_new</span>
                    <span>linkname</span>
                  </a>
                  <a href="#" className="material-icons">
                    share
                  </a>
                </div>
              </div>
            </div>
            <div className="card-info">
              <h1>a title</h1>
              <a
                href="#"
                className="material-icons nav-link nav-link-round-hover"
              >
                more_horiz
              </a>
            </div>
          </div>
        </div>

        <div className="card-wrapper">
          <div className="card">
            <div className="img-container">
              <img src="https://placekitten.com/150/300" alt="som text" />
              <div className="overlay" />
              <div className="card-menu">
                <div className="input-combo-field">
                  <input className="input-combo" />
                  <div className="btn">
                    <p>Save</p>
                  </div>
                </div>
                <div className="card-links">
                  <a href="#" className="link-flex">
                    <span className="material-icons">open_in_new</span>
                    <span>linkname</span>
                  </a>
                  <a href="#" className="material-icons">
                    share
                  </a>
                </div>
              </div>
            </div>
            <div className="card-info">
              <h1>a title</h1>
              <a
                href="#"
                className="material-icons nav-link nav-link-round-hover"
              >
                more_horiz
              </a>
            </div>
          </div>
        </div>

        <div className="card-wrapper">
          <div className="card">
            <div className="img-container">
              <img src="https://placekitten.com/200/300" alt="som text" />
              <div className="overlay" />
              <div className="card-menu">
                <div className="input-combo-field">
                  <input className="input-combo" />
                  <div className="btn">
                    <p>Save</p>
                  </div>
                </div>
                <div className="card-links">
                  <a href="#" className="link-flex">
                    <span className="material-icons">open_in_new</span>
                    <span>linkname</span>
                  </a>
                  <a href="#" className="material-icons">
                    share
                  </a>
                </div>
              </div>
            </div>
            <div className="card-info">
              <h1>a title</h1>
              <a
                href="#"
                className="material-icons nav-link nav-link-round-hover"
              >
                more_horiz
              </a>
            </div>
          </div>
        </div>

        <div className="card-wrapper">
          <div className="card">
            <div className="img-container">
              <img src="https://placekitten.com/200/300" alt="som text" />
              <div className="overlay" />
              <div className="card-menu">
                <div className="input-combo-field">
                  <input className="input-combo" />
                  <div className="btn">
                    <p>Save</p>
                  </div>
                </div>
                <div className="card-links">
                  <a href="#" className="link-flex">
                    <span className="material-icons">open_in_new</span>
                    <span>linkname</span>
                  </a>
                  <a href="#" className="material-icons">
                    share
                  </a>
                </div>
              </div>
            </div>
            <div className="card-info">
              <h1>a title</h1>
              <a
                href="#"
                className="material-icons nav-link nav-link-round-hover"
              >
                more_horiz
              </a>
            </div>
          </div>
        </div>

        <div className="card-wrapper">
          <div className="card">
            <div className="img-container">
              <img src="https://placekitten.com/200/400" alt="som text" />
              <div className="overlay" />
              <div className="card-menu">
                <div className="input-combo-field">
                  <input className="input-combo" />
                  <div className="btn">
                    <p>Save</p>
                  </div>
                </div>
                <div className="card-links">
                  <a href="#" className="link-flex">
                    <span className="material-icons">open_in_new</span>
                    <span>linkname</span>
                  </a>
                  <a href="#" className="material-icons">
                    share
                  </a>
                </div>
              </div>
            </div>
            <div className="card-info">
              <h1>a title</h1>
              <a
                href="#"
                className="material-icons nav-link nav-link-round-hover"
              >
                more_horiz
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button>+</button>
        <button>?</button>
      </div>
    </div>
  );
}

export default App;
