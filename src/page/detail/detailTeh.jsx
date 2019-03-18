import React, { Component } from "react";
import Navbar from "../../component/navbar";
import Footer from "../../component/footer";
import { Container, Row, Col } from "reactstrap";
import Detail from "../../component/detail";
import axios from "axios";
export default class daftarTeh extends Component {
  state = {
    data: []
  };
  componentDidMount() {
    axios
      .get(
        "https://api-event-react.herokuapp.com/api/teh/" +
          this.props.match.params.id
      )
      .then(res => {
        const data = res.data;
        this.setState({ data });
      });
  }
  render() {
    return (
      <div>
        <Navbar />
        <Container className="pb-4">
          <h2> Es teh panas </h2>
          <hr />
          <Row>
            <Col md="8">
              <div>
                <iframe
                  width="100%"
                  height="500px"
                  src="https://www.youtube.com/embed/XuvzrbzlFvs"
                  frameborder="0"
                />
              </div>
            </Col>
            <Col md="4">
              <Detail
                nama={this.state.data.name}
                harga={this.state.data.harga}
              />
            </Col>
          </Row>
        </Container>

        <Footer />
      </div>
    );
  }
}
