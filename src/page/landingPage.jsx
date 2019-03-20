import React, { Component } from "react";
import Navbar from "../component/web/navbar";
import Jumbotron from "../component/web/jumbotron";
import CardKategori from "../component/web/cardKategori";
import Footer from "../component/web/footer";
import "../asset/main.css";
import Swiper from "../component/web/swiper";
import Pure from "../component/web/pure";
import Carausel from "../component/web/carausel";
export default class landingPage extends Component {
  state = {
    name: "Silahkan Cari Sendiri Kopi yang Kamu Suka wkwkwk",
    image: "bg_jumbotron_landing"
  };

  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron data={this.state.name} image={this.state.image} />
        <CardKategori />
        <Pure />
        <Carausel />
        <Footer />
      </div>
    );
  }
}
