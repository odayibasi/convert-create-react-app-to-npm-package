import React from "react";
import logo from "assets/images/logo.svg";
import "./SampleUMDApp.scss";
import NumberMultiplier from "components/NumberMultiplier";

class SampleUMDApp extends React.Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          Sample NPM/UMD package
          <NumberMultiplier multiplier={this.props.multiplier} />
        </header>
      </div>
    );
  }
}

export default SampleUMDApp;
