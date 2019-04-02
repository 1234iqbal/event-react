import React, { Component } from "react";
import Navbar from "../../component/web/navbar/navbar";
import Jumbotron from "../../component/web/jumbotron/jumbotron";
import Footer from "../../component/web/footer/footer";
import Card from "../../component/web/card/card";
import { Container, Row, Col, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import SearchBar from "../../component/web/search/searchBar";
export default class daftarKopi extends Component {
  state = {
    image: "bg_jumbotron_landing",
    data: [],
    loading: true
  };

  componentDidMount() {
    axios.get("https://api-event-react.herokuapp.com/api/kopi/").then(res => {
      const data = res.data;
      this.setState({ data, loading: false });
    });
  }

  render() {
    console.log(this.state.data);
    return (
      <div>
        <Navbar />
        <Jumbotron image={this.state.image} />
        <Container>
          <Row className="pb-5">
            <Col md="3" className="pb-3">
              <SearchBar />
            </Col>
            <Col md="9">
              <Row>
                <Col md="9" />
                <Col md="3">
                  <FormGroup>
                    <Input type="select" name="select" id="exampleSelect">
                      <option>----</option>
                      <option>Kopi</option>
                      <option>Teh</option>
                      <option>Jus</option>
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
              <hr />
              <Row>
                {this.state.data.map(data => (
                  <Col md="3" className="pb-3">
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
              <center>
                <ClipLoader loading={this.state.loading} />
              </center>
            </Col>
          </Row>
        </Container>

        <Footer />
      </div>
    );
  }
}
