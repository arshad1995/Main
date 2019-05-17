import React, { Component } from "react";
import Card from "./Card";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="m">
        <Card
          name={"Arshad"}
          company={"Xelpmoc"}
          designation={"Developer"}
          src={"https://www.w3schools.com/w3css/img_lights.jpg"}
        />
      </div>
    );
  }
}

export default App;
