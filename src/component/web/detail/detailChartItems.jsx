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
    count: this.props.count,
    order: []
  };

  componentDidMount() {
    const data = localStorage.getItem("arip");
    const parseData = JSON.parse(data);
    if (parseData) {
      this.setState({ order: parseData });
    } else {
      this.setState({ order: [] });
    }
  }

  tambah = () => {
    this.setState({ count: this.state.count + 1 });
  };

  kurang = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    console.log(this.state.order);
    return (
      <div className="pb-4">
        <Card>
          <CardBody>
            <Row>
              <Col md="2">
                <CardImg src={this.props.image} height="100%" width="100%" />
              </Col>
              <Col md="7" className="pt-2">
                <CardText className="text">
                  <h4>
                    <strong>{this.props.name}</strong>
                  </h4>
                </CardText>
                <CardSubtitle>
                  <strong>Rp. {this.props.harga * this.state.count}</strong>
                </CardSubtitle>
              </Col>
              <Col md="3" className="pt-2">
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
