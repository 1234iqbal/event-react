import React, { Component } from "react";
import { Jumbotron, Row, Col } from "reactstrap";
export default class footer extends Component {
  render() {
    return (
      <div>
        <Jumbotron className="bg_footer mb-0">
          <Row>
            <Col md="3">hello</Col>
            <Col md="3">
              <ul>
                <li>Resep</li>
                <li>Produk</li>
                <li>Promo & Event</li>
                <li>Gizi Seimbang</li>
              </ul>

              <h3>follow Us :</h3>
            </Col>

            <Col md="3">hello</Col>
            <Col md="3">hello</Col>
          </Row>
        </Jumbotron>
      </div>
    );
  }
}
