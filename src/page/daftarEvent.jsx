import React, { Component } from "react";
import Navbar from "../component/navbar";
import Jumbotron from "../component/jumbotron";
import Footer from "../component/footer";
export default class daftarEvent extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <Footer />
      </div>
    );
  }
}
