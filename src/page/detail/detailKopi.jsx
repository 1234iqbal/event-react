import React, { Component } from "react";
import Navbar from "../../component/web/navbar/navbar";
import Footer from "../../component/web/footer/footer";
import { Container, Row, Col } from "reactstrap";
import Detail from "../../component/web/detail/detailItems";
import axios from "axios";
import Tabsbar from "../../component/web/tabsbar/tabsbar";
import Card from "../../component/web/card/card";
import { Link } from "react-router-dom";
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
          <Row className="pb-4">
            <Col md="8" className="pb-3">
              <div>
                <img src={this.state.data.image} className="image-detail" />
              </div>
            </Col>
            <Col md="4">
              <Detail
                nama={this.state.data.name}
                harga={this.state.data.harga}
                image={this.state.data.image}
              />
            </Col>
          </Row>
          <Tabsbar />
          <div>
            <h3>Produk Terkait</h3>
          </div>
          <Row>
            <Col md="3" className="pb-3">
              <Link to="/" className="link">
                <Card
                  name="test"
                  image="https://s.republika.co.id/uploads/images/inpicture_slide/seni-di-atas-kopi-alias-latte-art-_160914181605-378.jpg"
                  deskripsi="tidak ada"
                />
              </Link>
            </Col>
            <Col md="3">
              <Link to="/" className="link">
                <Card
                  name="test"
                  image="https://s.republika.co.id/uploads/images/inpicture_slide/seni-di-atas-kopi-alias-latte-art-_160914181605-378.jpg"
                  deskripsi="tidak ada"
                />
              </Link>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}
