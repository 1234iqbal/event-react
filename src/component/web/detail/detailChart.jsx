import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col
} from "reactstrap";
export default class detailChart extends Component {
  render() {
    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle>
              <h3 className="text">Detail Minuman</h3>
              <hr />
            </CardTitle>
            <Row>
              <Col md="6">
                <CardSubtitle>Subtotal</CardSubtitle>
              </Col>
              <Col md="6">
                <CardSubtitle>Rp100.000</CardSubtitle>
              </Col>
            </Row>
            <Row className="pt-2">
              <Col md="6">
                <CardSubtitle>Biaya pengiriman</CardSubtitle>
              </Col>
              <Col md="6">
                <CardSubtitle>Rp80.000</CardSubtitle>
              </Col>
            </Row>
            <hr />
            <Row className="pb-3">
              <Col md="6">
                <CardSubtitle>Total</CardSubtitle>
              </Col>
              <Col md="6">
                <CardSubtitle className="text">Rp180.000</CardSubtitle>
              </Col>
            </Row>

            <Button color="success" block>
              Buat Pemesanan
            </Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}
