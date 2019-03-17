import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";
import { Link } from "react-router-dom";
export default class card extends Component {
  render() {
    return (
      <Link to="/detail_minuman" className="link">
        <div>
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
      </Link>
    );
  }
}
