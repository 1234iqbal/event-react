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
export default class detailChartItems extends Component {
  render() {
    return (
      <div className="pb-4">
        <Card>
          <CardBody>
            <Row>
              <Col md="4">
                <CardImg
                  src="https://asset.kompas.com/data/photo/2016/05/30/1803566manis780x390.jpg"
                  height="150px"
                  width="100%"
                />
              </Col>
              <Col md="8">
                <CardText className="text">
                  <h4>sepatu kinclong</h4>
                </CardText>
                <CardSubtitle>Rp. 18.000</CardSubtitle>
                <CardText>Jumlah : 2</CardText>
                <Button color="danger">Hapus</Button>
              </Col>

              <CardTitle />
            </Row>
          </CardBody>
        </Card>
      </div>
    );
  }
}
