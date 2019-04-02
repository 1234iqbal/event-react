import React, { Component } from "react";
import Navbar from "../../component/web/navbar/navbar";
import { Container, Row, Col } from "reactstrap";
import Footer from "../../component/web/footer/footer";
import DetailChart from "../../component/web/detail/detailChart";
import DetailChartItems from "../../component/web/detail/detailChartItems";
export default class chart extends Component {
  state = {
    order: []
  };
  componentDidMount() {
    const data = localStorage.getItem("barang");
    this.setState({ order: JSON.parse(data) });
  }

  render() {
    console.log(this.state.order);
    return (
      <div>
        <Navbar />
        <Container className="pt-3 pb-5">
          <Row>
            <Col md="8">
              {this.state.order &&
                this.state.order.map(res => (
                  <DetailChartItems
                    name={res.nama}
                    image={res.image}
                    harga={res.harga}
                    count={res.count}
                  />
                ))}
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
