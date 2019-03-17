import React, { Component } from "react";
import { Jumbotron } from "reactstrap";
export default class jumbotron extends Component {
  render() {
    const image = this.props.image;
    return (
      <div>
        <Jumbotron className={`${image} text-center`}>
          <div className="header-jumbotron" />
          <div className="col-sm-12 col-md-6 offset-md-3" />
        </Jumbotron>
      </div>
    );
  }
}
