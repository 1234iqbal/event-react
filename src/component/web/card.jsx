import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

export default class card extends Component {
  render() {
    return (
      <div>
        <br />
        <Card className="card-hover">
          <CardImg
            top
            width="100%"
            height="200px"
            src={this.props.image}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>
              <strong>{this.props.name}</strong>
            </CardTitle>
            <CardText>
              <small>{this.props.deskripsi}</small>
            </CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}