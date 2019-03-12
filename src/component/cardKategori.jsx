import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Card from "./card";
export default class cardKategori extends Component {
  render() {
    return (
      <div>
        <h2 className="text-center">Explore ketegori</h2>
        <Container>
          <Row>
            <Col xs="4">
              <div>
                <Card />
              </div>
            </Col>

            <Col xs="4">
              <div>
                <Card />
              </div>
            </Col>

            <Col xs="4">
              <div>
                <Card />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
