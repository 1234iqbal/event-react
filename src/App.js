import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import jwtDecode from "jwt-decode";
import landingPage from "./page/landingPage/landingPage";
import detailKopi from "./page/detail/detailKopi";
import daftarKopi from "./page/daftar/daftarKopi";
import allMinuman from "./page/allMinuman";
import login from "./page/auth/login";
import chart from "./page/chart/chart";
import searchItems from "./page/search/searchItems";
import register from "./page/auth/register";
class App extends Component {
  state = {
    user: []
  };
  componentDidMount() {
    try {
      const jwt = sessionStorage.getItem("token");
      const user = jwtDecode(jwt);
      console.log(user);
      this.setState({ user });
    } catch (ex) {}
  }

  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={landingPage} />
          <Route path="/login" exact component={login} />
          <Route path="/register" exact component={register} />
          <Route path="/chart" exact component={chart} />
          <Route path="/category/:id" exact component={chart} />
          <Route path="/search" exact component={searchItems} />
          <Route path="/daftar_seluruh_minuman" exact component={allMinuman} />
          <Route path="/daftar_Kopi" exact component={daftarKopi} />
          <Route path="/detail_kopi/:id" exact component={detailKopi} />
        </div>
      </Router>
    );
  }
}

export default App;
