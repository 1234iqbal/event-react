import React, { Component } from "react";
import Navbar from "../../component/web/navbar";
import Jumbotron from "../../component/web/jumbotron";
import Footer from "../../component/web/footer";
import Card from "../../component/web/card";
import { Container, Row, Col } from "reactstrap";
import axios from "axios";
import Loading from "../../component/web/loading";
import { Link } from "react-router-dom";

export default class searchItems extends Component {
  state = {
    image: "bg_jumbotron_landing",
    data: [],
    loading: true
  };

  componentDidMount() {
    axios.get("https://api-event-react.herokuapp.com/api/search/").then(res => {
      const data = res.data;
      this.setState({ data, loading: false });
    });
  }
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron image={this.state.image} />

        <Container fluid className="pb-5 pt-5">
          <Row>
            <Loading data={this.state.loading} />
            {this.state.data.map(data => (
              <Col xs="3">
                <Link to={"/detail_kopi/" + data.id} className="link">
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
