import React, { Component } from "react";
import Navbar from "../component/navbar";
import Jumbotron from "../component/jumbotron";
import Footer from "../component/footer";
import Tabsbar from "../component/tabsbar";
import { Container, Row, Col } from "reactstrap";
export default class detailEventId extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Container fluid>
          <h2> white Coffe </h2>
          <hr />
          <Row>
            <Col md="8">
              <div>
                <iframe
                  width="100%"
                  height="500px"
                  src="https://www.youtube.com/embed/V1kkeDYPWS8"
                />
              </div>
            </Col>
            <Col md="3">Nama Saya Arif dan ini adik saya rara</Col>
          </Row>
        </Container>

        <Footer />
      </div>
    );
  }
}
