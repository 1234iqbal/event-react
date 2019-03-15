import React, { Component } from "react";
import Navbar from "../component/navbar";
import Jumbotron from "../component/jumbotron";
import CardKategori from "../component/cardKategori";
import Footer from "../component/footer";
import "../asset/main.css";
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
        <Footer />
      </div>
    );
  }
}
