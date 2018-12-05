import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import KakaoLink from "./components/KakaoLink";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <div className="row">
          <div className="col-12">
            <div className="jumbotron jumbotron-fluid">
              <div className="container">
                <h1 className="display-4">Kakao Services in my Web</h1>
                <p className="lead">
                  This is kakao services which you can use in your web.
                  Even if you did not install kakaotalk pc version.
                </p>
              </div>
            </div>
            <div className="col-12">
              <KakaoLink />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
