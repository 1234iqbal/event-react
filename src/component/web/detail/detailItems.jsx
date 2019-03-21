import React, { Component } from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Form,
  FormGroup,
  Input,
  Row,
  Col
} from "reactstrap";
import { Link } from "react-router-dom";

export default class detailItems extends Component {
  state = {
    jumlah: 0,
    count: 0
  };
  tambah = () => {
    this.setState({ count: this.state.count + 1 });
  };
  kurang = () => {
    this.setState({ count: this.state.count - 1 });
  };

  handleChange = e => {
    this.setState({ jumlah: e.target.value });
  };

  render() {
    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle>
              <h3 className="text">Detail Minuman</h3>
              <hr />
            </CardTitle>
            <CardSubtitle>
              <strong>Nama</strong>
            </CardSubtitle>
            <CardText>{this.props.nama}</CardText>

            <CardSubtitle>
              <strong>Harga</strong>
            </CardSubtitle>
            <CardText>Rp. {this.props.harga}</CardText>

            <CardSubtitle>
              <strong>Jumlah</strong>
            </CardSubtitle>
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

            <CardSubtitle>
              <strong>Total harga</strong>
            </CardSubtitle>
            <CardText>Rp. {this.props.harga * this.state.count}</CardText>

            <Row>
              <Col md="6">
                <Link to="/login" className="link">
                  <Button color="success" block>
                    Beli Sekarang
                  </Button>
                </Link>
              </Col>
              <Col md="6">
                <Link to="/login" className="link">
                  <Button color="success" block>
                    Add Keranjang
                  </Button>
                </Link>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </div>
    );
  }
}
