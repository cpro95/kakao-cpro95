import React, { Component } from "react";

class Header extends Component {
  state = {
    isActive: false
  };

  toggleNav = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }));
  };

  render() {
    return (
      <nav className="navbar is-black">
        <div className="navbar-brand">
          <a className="navbar-item has-text-weight-bold" href="/">
            HOME
          </a>

          <a
            role="button"
            className="navbar-burger burger"
            onClick={this.toggleNav}
          >
            <span />
            <span />
            <span />
          </a>
        </div>

        <div
          className={
            this.state.isActive ? "navbar-menu is-active" : "navbar-menu"
          }
        >
          <div className="navbar-start">
            <a className="navbar-item" href="/">
              카카오톡
            </a>
            {/* <a className="navbar-item">카카오스토리</a> */}
          </div>

          <div className="navbar-end">
            <a
              href="https://github.com/cpro95/kakao-cpro95"
              className="navbar-item"
            >
              <span className="icon">
                <i className="fab fa-lg fa-github" />
              </span>
            </a>
          </div>

        </div>
      </nav>
    );
  }
}

export default Header;
