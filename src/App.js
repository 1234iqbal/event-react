import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import landingPage from "./page/landingPage";
import daftarKopi from "./page/daftarKopi";
import detailEventId from "./page/detailEventId";
import daftarSusu from "./page/daftarSusu";
import daftarTeh from "./page/daftarTeh";
import allMinuman from "./page/allMinuman";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={landingPage} />
          <Route path="/daftar_seluruh_minuman" component={allMinuman} />
          <Route path="/daftar_Kopi" component={daftarKopi} />
          <Route path="/daftar_susu" component={daftarSusu} />
          <Route path="/daftar_teh" component={daftarTeh} />
          <Route path="/detail_event" component={detailEventId} />
        </div>
      </Router>
    );
  }
}

export default App;
