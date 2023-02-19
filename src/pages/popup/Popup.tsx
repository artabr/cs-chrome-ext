import React from "react";
import logo from "@assets/img/logo.png";
import "@pages/popup/Popup.css";

const Popup = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This extension adds useful enhancements to the Contentstack admin
          panel UI.
        </p>
      </header>
    </div>
  );
};

export default Popup;
