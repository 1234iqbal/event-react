import React, { Component } from "react";
import Navbar from "../component/navbar";
import Jumbotron from "../component/jumbotron";
import Footer from "../component/footer";
import Card from "../component/card";
import { Container, Row, Col } from "reactstrap";
export default class daftarEvent extends Component {
  state = {
    name: "Event Kajian Koding Semuanya ada Disini"
  };
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron data={this.state.name} />

        <Container fluid className="pt-5 pb-5">
          <Row>
            <Col xs="3">
              <Card />
            </Col>
            <Col xs="3">
              <Card />
            </Col>
            <Col xs="3">
              <Card />
            </Col>
            <Col xs="3">
              <Card />
            </Col>
          </Row>
        </Container>

        <Container fluid className="pb-5">
          <Row>
            <Col xs="3">
              <Card />
            </Col>
            <Col xs="3">
              <Card />
            </Col>
            <Col xs="3">
              <Card />
            </Col>
            <Col xs="3">
              <Card />
            </Col>
          </Row>
        </Container>

        <Footer />
      </div>
    );
  }
}
