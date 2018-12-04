import React from "react";

const Layout = () => (
  <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
    <a className="navbar-brand font-weight-bold" href="/">
      Home
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link font-weight-bold" href="/">
            Home
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Layout;
