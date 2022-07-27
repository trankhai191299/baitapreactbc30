import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark justify-content-between">
          <div className="container">
          <a className="navbar-brand" href="#">
              Start Bootstrap
          </a>
          <ul className="navbar-nav mt-2 mt-lg-0 ">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Home 
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
          </ul>
          </div>
        </nav>
    );
  }
}
