import React, { Component } from "react";
import { Card, CardImg, CardBody, Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
export default class cardKategori extends Component {
  render() {
    return (
      <div className="pb-5 pt-5">
        <h2 className="text-center pb-4">
          <b>Kategori Kopi</b>
        </h2>
        <Container>
          <Row>
            <Col xs="6">
              <Link to="/daftar_event" className="link">
                <div>
                  <Card className="card-hover">
                    <Row>
                      <Col xs="5">
                        <CardImg
                          height="120px"
                          width="250px"
                          src="http://www.balipost.com/wp-content/uploads/2017/04/balipostcom_doyan-kopi-ini-takaran-aman-dalam-sehari_01-696x464.jpg"
                          alt="Card image cap"
                        />
                      </Col>
                      <Col xs="7">
                        <CardBody>
                          <div className="text-type-kategori text-card">
                            <h2>
                              <b>Kopi Hitam</b>
                            </h2>
                          </div>
                        </CardBody>
                      </Col>
                    </Row>
                  </Card>
                </div>
              </Link>
            </Col>

            <Col xs="6">
              <Link to="/daftar_event" className="link">
                <div>
                  <Card className="card-hover">
                    <Row>
                      <Col xs="5">
                        <CardImg
                          height="120px"
                          width="250px"
                          src="https://hellosehat.com/wp-content/uploads/2016/06/Dampak-Negatif-Susu.jpg"
                          alt="Card image cap"
                        />
                      </Col>
                      <Col xs="7">
                        <CardBody>
                          <div className="text-type-kategori text-card">
                            <h2>
                              <b>Kopi Susu</b>
                            </h2>
                          </div>
                        </CardBody>
                      </Col>
                    </Row>
                  </Card>
                </div>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
