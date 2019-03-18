import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import landingPage from "./page/landingPage";
import detailTeh from "./page/detail/detailTeh";
import detailKopi from "./page/detail/detailKopi";
import detailSusu from "./page/detail/detailSusu";
import daftarKopi from "./page/daftar/daftarKopi";
import daftarSusu from "./page/daftar/daftarSusu";
import daftarTeh from "./page/daftar/daftarTeh";
import allMinuman from "./page/allMinuman";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={landingPage} />
          <Route path="/daftar_seluruh_minuman" exact component={allMinuman} />
          <Route path="/daftar_Kopi" exact component={daftarKopi} />
          <Route path="/daftar_susu" exact component={daftarSusu} />
          <Route path="/daftar_teh" exact component={daftarTeh} />
          <Route path="/detail_kopi/:id" exact component={detailKopi} />
          <Route path="/detail_susu/:id" exact component={detailSusu} />
          <Route path="/detail_Teh/:id" exact component={detailTeh} />
        </div>
      </Router>
    );
  }
}

export default App;
