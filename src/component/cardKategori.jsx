import React, { Component } from "react";
import { Card, CardImg, CardBody, Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
export default class cardKategori extends Component {
  render() {
    return (
      <div className="pb-5 pt-5">
        <h2 className="text-center pb-5">Explore ketegori</h2>
        <Container>
          <Row>
            <Col xs="6">
              <Link to="/daftar_event">
                <div>
                  <Card>
                    <Row>
                      <Col xs="5">
                        <CardImg
                          height="100%"
                          width="100%"
                          src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                          alt="Card image cap"
                        />
                      </Col>
                      <Col xs="7">
                        <CardBody>
                          <div className="text-card">
                            <b>Design UI / UX</b>
                          </div>
                        </CardBody>
                      </Col>
                    </Row>
                  </Card>
                </div>
              </Link>
            </Col>

            <Col xs="6">
              <Link to="/daftar_event">
                <div>
                  <Card>
                    <Row>
                      <Col xs="5">
                        <CardImg
                          height="100%"
                          width="100%"
                          src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                          alt="Card image cap"
                        />
                      </Col>
                      <Col xs="7">
                        <CardBody>
                          <div className="text-card">
                            <b>Programming</b>
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
