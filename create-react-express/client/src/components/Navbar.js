import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <p className="navbar-brand">
        Google Books
      </p>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/searchbooks">
              Search
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/savedbooks">
              Save
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}