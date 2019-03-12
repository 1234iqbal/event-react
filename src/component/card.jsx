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
      <Link to="/detail_event">
        <div>
          <Card className="card-hover">
            <CardImg
              top
              width="100%"
              src="https://s16815.pcdn.co/wp-content/uploads/2015/10/iStock_computer-art.151110.jpg"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
            </CardBody>
          </Card>
        </div>
      </Link>
    );
  }
}
