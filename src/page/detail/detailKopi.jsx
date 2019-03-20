import React, { Component } from "react";
import Navbar from "../../component/web/navbar";
import Footer from "../../component/web/footer";
import { Container, Row, Col } from "reactstrap";
import Detail from "../../component/web/detail";
import axios from "axios";
export default class detailKopi extends Component {
  state = {
    data: [],
    count: 0
  };

  
  componentDidMount() {
    axios
      .get(
        "https://api-event-react.herokuapp.com/api/kopi/" +
          this.props.match.params.id
      )
      .then(res => {
        const data = res.data;
        this.setState({ data });
      });
  }
  render() {
    console.log(this.state.data);
    return (
      <div>
        <Navbar />
        <Container className="pb-4 pt-5">
          <Row>
            <Col md="8">
              <div>
                <img src={this.state.data.image} className="image-detail" />
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
