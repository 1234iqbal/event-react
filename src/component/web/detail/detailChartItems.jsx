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
  Col,
  Form
} from "reactstrap";
export default class detailChartItems extends Component {
  state = {
    count: 0
  };

  tambah = () => {
    this.setState({ count: this.state.count + 1 });
  };

  kurang = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    console.log(this.state.count);
    return (
      <div className="pb-4">
        <Card>
          <CardBody>
            <Row>
              <Col md="2">
                <CardImg
                  src="https://asset.kompas.com/data/photo/2016/05/30/1803566manis780x390.jpg"
                  height="100%"
                  width="100%"
                />
              </Col>
              <Col md="7">
                <CardText className="text">
                  <h4>
                    <strong>sepatu kinclong</strong>
                  </h4>
                </CardText>
                <CardSubtitle>Rp. {18 * this.state.count}.000</CardSubtitle>
              </Col>
              <Col md="3">
                <CardText>
                  <Form inline>
                    <Button color="success" onClick={this.kurang}>
                      -
                    </Button>
                    <div className="mgr-3 mgl-3 ">
                      <h4 className="text">{this.state.count}</h4>
                    </div>
                    <Button color="success" onClick={this.tambah}>
                      +
                    </Button>
                  </Form>
                </CardText>
              </Col>

              <CardTitle />
            </Row>
          </CardBody>
        </Card>
      </div>
    );
  }
}
