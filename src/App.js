import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Info from "./components/Info";
import Footer from "./components/Footer";
import KakaoLink from "./components/KakaoLink";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Info />
        <KakaoLink />
        <Footer />
      </div>
    );
  }
}

export default App;
