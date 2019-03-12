import React, { Component } from "react";
import Navbar from "../component/navbar";
import Jumbotron from "../component/jumbotron";
import Footer from "../component/footer";
import Card from "../component/card";

export default class detailEventId extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <Card />
        <Footer />
      </div>
    );
  }
}
