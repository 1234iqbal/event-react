import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
export default class detail extends Component {
  button() {
    alert("hello");
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
            <CardText>jus jeruk</CardText>

            <CardSubtitle>
              <strong>Harga</strong>
            </CardSubtitle>
            <CardText>Rp. 500.000</CardText>

            <CardSubtitle>
              <strong>Jumlah</strong>
            </CardSubtitle>
            <CardText>2</CardText>

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
