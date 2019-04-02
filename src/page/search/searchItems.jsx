import React, { Component } from "react";
import Navbar from "../../component/web/navbar/navbar";
import Jumbotron from "../../component/web/jumbotron/jumbotron";
import Footer from "../../component/web/footer/footer";
import Card from "../../component/web/card/card";
import { Container, Row, Col } from "reactstrap";
import SearchBar from "../../component/web/search/searchBar";
import { Link } from "react-router-dom";

export default class searchItems extends Component {
  state = {
    image: "bg_jumbotron_landing",
    url: "kopi Mix",
    data: [],
    loading: true
  };

  componentDidMount() {}
  render() {
    return (
      console.log(this.props.history.location.state.data),
      (
        <div>
          <Navbar />
          <Jumbotron image={this.state.image} />

          <Container className="pb-5 pt-5">
            <Row>
              <Col md="3" className="pb-3">
                <SearchBar />
              </Col>
              <Col md="9">
                <Row>
                  {this.props.history.location.state.data.map(data => (
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
              </Col>
            </Row>
          </Container>
          <Footer />
        </div>
      )
    );
  }
}
