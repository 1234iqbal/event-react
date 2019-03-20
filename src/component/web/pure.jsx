import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
export default class pure extends Component {
  render() {
    return (
      <div className="pb-5 pt-5">
        <Container>
          <Row>
            <Col md="6">
              <img
                src="https://hellosehat.com/wp-content/uploads/2018/11/shutterstock_1148354840.jpg"
                width="100%"
                height="250px"
              />
            </Col>
            <Col md="6">
              <center>
                <div className="card-pure">hello</div>
              </center>
            </Col>
          </Row>

          <Row>
            <Col md="6">
              <center>
                <div className="card-pure">hello</div>
              </center>
            </Col>
            <Col md="6">
              <img
                src="https://hellosehat.com/wp-content/uploads/2018/11/shutterstock_1148354840.jpg"
                width="100%"
                height="250px"
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
