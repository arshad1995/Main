import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Card from "./Card";

import Image from "./Image";
import NewsCard from "./NewsCard";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route path="/" component={NewsCard} exact={true} />
          <Route path="/image" component={Image} />
          <Route path="/card" component={Card} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
