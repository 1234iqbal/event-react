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
  button() {
    alert(
      "Silahkan tunggu dalam waktu kurang dari 5 menit pelayan akan datang"
    );
  }

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
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="Masukan Email"
                  />
                </FormGroup>
              </Form>
            </CardText>

            <CardSubtitle>
              <strong>Total harga</strong>
            </CardSubtitle>
            <CardText>Rp. 500.000</CardText>

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
