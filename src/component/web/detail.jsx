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

export default class detail extends Component {
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
  button() {
    alert(
      "Silahkan tunggu dalam waktu kurang dari 5 menit, pelayan kami akan datang dan membawakan pesanan yang anda inginkan"
    );
  }
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
                {/* <FormGroup>
                   <Input
                    className="input-count"
                    name="jumlah"
                    onChange={this.handleChange}
                    placeholder="0"
                    min="0"
                  /> 
                </FormGroup> */}
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
                <Button
                  color="success"
                  block
                  onClick={() => {
                    this.button();
                  }}
                >
                  Beli Sekarang
                </Button>
              </Col>
              <Col md="6">
                <Button
                  color="success"
                  block
                  onClick={() => {
                    this.button();
                  }}
                >
                  Add Keranjang
                </Button>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </div>
    );
  }
}
