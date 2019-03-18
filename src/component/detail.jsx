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
  Input
} from "reactstrap";
export default class detail extends Component {
  state = {
    jumlah: 0
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
              <h3>Detail Minuman</h3>
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
              <Form>
                <FormGroup>
                  <Input
                    type="jumlah"
                    name="jumlah"
                    id="examplejumlah"
                    onChange={this.handleChange}
                    placeholder="Silahkan Masukan jumlah"
                  />
                </FormGroup>
              </Form>
            </CardText>

            <CardSubtitle>
              <strong>Total harga</strong>
            </CardSubtitle>
            <CardText>Rp. {this.props.harga * this.state.jumlah}</CardText>

            <Button
              className=""
              color="info"
              block
              onClick={() => {
                this.button();
              }}
            >
              Pesan Sekarang
            </Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}
