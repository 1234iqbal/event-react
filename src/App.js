import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import landingPage from "./page/landingPage";
import daftarEvent from "./page/daftarEvent";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={landingPage} />
          <Route path="/daftar_event" component={daftarEvent} />
          <Route path="/detail_event" component={daftarEvent} />
        </div>
      </Router>
    );
  }
}

export default App;
