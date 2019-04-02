import React, { Component } from "react";
import Navbar from "../../component/web/navbar/navbar";
import Jumbotron from "../../component/web/jumbotron/jumbotron";
import CardKategori from "../../component/web/card/cardKategori";
import Footer from "../../component/web/footer/footer";
import "../../asset/main.css";
import Pure from "../../component/web/pure/pure";
import Carausel from "../../component/web/carausel/carausel";
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
