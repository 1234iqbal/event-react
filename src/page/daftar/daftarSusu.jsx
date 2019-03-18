import React, { Component } from "react";
import Navbar from "../../component/navbar";
import Jumbotron from "../../component/jumbotron";
import Footer from "../../component/footer";
import Card from "../../component/card";
import { Container, Row, Col } from "reactstrap";
import axios from "axios";
import { Link } from "react-router-dom";

export default class daftarSusu extends Component {
  state = {
    image: "bg_jumbotron_landing",
    data: []
  };

  componentDidMount() {
    axios.get("https://api-event-react.herokuapp.com/api/susu/").then(res => {
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
        <div className="pt-5">
          <h2 className="text-center pb-4">
            <b>Daftar Susu</b>
          </h2>
        </div>
        <Container fluid className="pb-5">
          <Row>
            {this.state.data.map(data => (
              <Col xs="3">
                <Link to={"/detail_susu/" + data.id} className="link">
                  <Card
                    name={data.name}
                    image={data.image}
                    deskripsi={data.deskripsi}
                  />
                </Link>
              </Col>
            ))}
          </Row>
        </Container>

        <Footer />
      </div>
    );
  }
}