import React, { Component } from "react";
import Navbar from "../component/navbar";
import Jumbotron from "../component/jumbotron";
import CardKategori from "../component/cardKategori";
import Footer from "../component/footer";
import "../asset/main.css";
export default class landingPage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <CardKategori />
        <Footer />
      </div>
    );
  }
}
