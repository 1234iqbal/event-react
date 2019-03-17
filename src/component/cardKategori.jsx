import React, { Component } from "react";
import { Card, CardImg, CardBody, Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
export default class cardKategori extends Component {
  render() {
    return (
      <div className="pb-5 pt-5">
        <h2 className="text-center pb-4">
          <b>Silahkan Pilih Minuman Yang Kalian Sukai :</b>
        </h2>
        <Container>
          <Row>
            <Col xs="4">
              <Link to="/daftar_kopi" className="link">
                <div>
                  <Card className="card-hover">
                    <Row>
                      <Col xs="5">
                        <CardImg
                          height="100%"
                          width="150px"
                          src="http://www.balipost.com/wp-content/uploads/2017/04/balipostcom_doyan-kopi-ini-takaran-aman-dalam-sehari_01-696x464.jpg"
                          alt="Card image cap"
                        />
                      </Col>
                      <Col xs="7">
                        <CardBody>
                          <div className="text-type-kategori text-card">
                            <h2>
                              <b>Kopi</b>
                            </h2>
                          </div>
                        </CardBody>
                      </Col>
                    </Row>
                  </Card>
                </div>
              </Link>
            </Col>

            <Col xs="4">
              <Link to="/daftar_susu" className="link">
                <div>
                  <Card className="card-hover">
                    <Row>
                      <Col xs="5">
                        <CardImg
                          height="100%"
                          width="150px"
                          src="https://hellosehat.com/wp-content/uploads/2016/06/Dampak-Negatif-Susu.jpg"
                          alt="Card image cap"
                        />
                      </Col>
                      <Col xs="7">
                        <CardBody>
                          <div className="text-type-kategori text-card">
                            <h2>
                              <b>Susu</b>
                            </h2>
                          </div>
                        </CardBody>
                      </Col>
                    </Row>
                  </Card>
                </div>
              </Link>
            </Col>

            <Col xs="4">
              <Link to="/daftar_teh" className="link">
                <div>
                  <Card className="card-hover">
                    <Row>
                      <Col xs="5">
                        <CardImg
                          height="100%"
                          width="250px"
                          src="http://cdn2.tstatic.net/bali/foto/bank/images/ilustrasi-minum-teh.jpg"
                          alt="Card image cap"
                        />
                      </Col>
                      <Col xs="7">
                        <CardBody>
                          <div className="text-type-kategori text-card">
                            <h2>
                              <b>Teh</b>
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
