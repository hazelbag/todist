import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper white">
          <BrowserRouter>
            <a
              href="/todos"
              style={{
                fontFamily: "monospace"
              }}
              className="col s5 brand-logo center black-text"
            >
              <i className="material-icons">code</i>
              ToDo's
            </a>
            </BrowserRouter>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;