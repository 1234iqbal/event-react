import React, { Component } from "react";
import Navbar from "../component/navbar";
import Jumbotron from "../component/jumbotron";
import Footer from "../component/footer";
import Tabsbar from "../component/tabsbar";

export default class detailEventId extends Component {
  state = {
    image: "bg_jumbotron_detail"
  };
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron image={this.state.image} />
        <Tabsbar />
        <Footer />
      </div>
    );
  }
}
