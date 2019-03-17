import React, { Component } from "react";
import Navbar from "../component/navbar";
import Jumbotron from "../component/jumbotron";
import Footer from "../component/footer";
import Card from "../component/card";
import { Container, Row, Col } from "reactstrap";
import axios from "axios";

export default class allMinuman extends Component {
  state = {
    image: "bg_jumbotron_landing",
    data: []
  };

  componentDidMount() {
    axios.get("http://localhost:8000/api/").then(res => {
      console.log(res.data);
      const data = res.data;
      this.setState({ data });
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron image={this.state.image} />
        <div className="pb-5 pt-5">
          <h2 className="text-center pb-4">
            <b>Daftar Kopi</b>
          </h2>
        </div>
        <Container fluid className="pt-5 pb-5">
          <Row>
            {this.state.data.map(data => (
              <Col xs="3">
                <Card
                  name={data.name}
                  image={data.image}
                  deskripsi={data.deskripsi}
                />
              </Col>
            ))}
          </Row>
        </Container>

        <Footer />
      </div>
    );
  }
}
