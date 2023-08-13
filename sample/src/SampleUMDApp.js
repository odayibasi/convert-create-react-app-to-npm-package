import React from "react";
//import logo from "assets/images/logo.svg";
import "./SampleUMDApp.scss";
import NumberMultiplier from "components/NumberMultiplier";

class SampleUMDApp extends React.Component {
  constructor(props) {
    super(props);
    console.log("SampleUMDApp constructor");
  }
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <img className="app-logo-src" alt="logo" />
          {/* <img src={logo} className="app-logo" alt="logo" /> */}
          {/* <img  className="app-logo logosrc" alt="logo" /> */}
          {/* <img
            src={
              "https://d3jy31tj1gt845.cloudfront.net/projects/medium-samples/assets/logo.svg"
            }
            className="app-logo"
            alt="logo"
          /> */}
          Sample NPM/UMD package
          <NumberMultiplier multiplier={this.props.multiplier} />
        </header>
      </div>
    );
  }
}

export default SampleUMDApp;
