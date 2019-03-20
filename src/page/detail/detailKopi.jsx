import React, { Component } from "react";
import Navbar from "../../component/web/navbar";
import Footer from "../../component/web/footer";
import { Container, Row, Col } from "reactstrap";
import Detail from "../../component/web/detail";
import axios from "axios";
export default class detailKopi extends Component {
  state = {
    data: []
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
        <Container className="pb-4">
          <h2> Kopi Enak </h2>
          <hr />
          <Row>
            <Col md="8">
              <div>
                <iframe
                  width="100%"
                  height="500px"
                  src="https://www.youtube.com/embed/U5Po5UUpT9w"
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
