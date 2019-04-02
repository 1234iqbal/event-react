import React, { Component } from "react";
import { Jumbotron, Row, Col, Container, Button } from "reactstrap";
export default class footer extends Component {
  render() {
    return (
      <div>
        <Jumbotron className="bg_footer mb-0">
          <Container>
            <Row>
              <Col md="3">
                <div>Tentang Minumanku</div>
                <div>Tentang Kami</div>
                <div>Kontact Kami</div>
              </Col>
              <Col md="3">
                <div>Kategori Minuman</div>
                <div>Kategori Makanan</div>
                <div>Marketing</div>
                <div>Anggota</div>
              </Col>
              <Col md="3">
                <div>Informasi Lain</div>
                <div>Login</div>
                <div>Daftar</div>
              </Col>

              <Col md="3">
                <div>Ikuti Social Media Kami</div>
                <div className="pt-3">fb , twitter, youtube</div>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}
