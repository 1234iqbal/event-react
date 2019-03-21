import React, { Component } from "react";
import Navbar from "../component/web/navbar";
import { Container, Row, Col } from "reactstrap";
import Footer from "../component/web/footer";
import DetailChart from "../component/web/detail/detailChart";
import DetailChartItems from "../component/web/detail/detailChartItems";
export default class chart extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Container className="pt-3 pb-5">
          <Row>
            <Col md="8">
              <DetailChartItems />
              <DetailChartItems />
              <DetailChartItems />
              <DetailChartItems />
            </Col>
            <Col md="4">
              <DetailChart />
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}
