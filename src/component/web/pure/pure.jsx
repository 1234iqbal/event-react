import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
export default class pure extends Component {
  render() {
    return (
      <div className="pb-5 pt-5">
        <Container className="pb-8">
          <hr />
          <center className="pb-5 pt-5">
            <div className="text text-center">
              <h2>
                <b>BELANJA MINUMAN ONLINE</b>
              </h2>
            </div>
            <div>Kini kita bisa belanja minuman secara online</div>
            <div>Tanpa Perlu repot - repot ke dapur</div>
          </center>
          <Row className="pt-5">
            <Col md="6">
              <img
                src="https://cdn.idntimes.com/content-images/post/20181003/9696920e5a60e2197bddd3c3de2f99b3.jpg"
                width="100%"
                height="250px"
              />
            </Col>
            <Col md="6">
              <center>
                <div className="card-pure-judul"> Putu Ayu </div>
                <div className="card-pure">
                  Kue basah tradisional yang enak dan lembut ini merupakan salah
                  satu dari aneka jajanan pasar yang hingga saat ini masih
                  populer. Kue Putu Ayu memiliki tampilan warna yang cantik,
                  yaitu hijau...
                </div>
              </center>
            </Col>
          </Row>

          <Row className="pt-10">
            <Col md="6">
              <center>
                <div className="card-pure-judul"> Pastel Kering </div>
                <div className="card-pure">
                  Pastel adalah salah satu kudapan yang sering kita temui di
                  berbagai penjual kue basah, bahkan sering juga kita temui
                  kotak kue tasyakuran dan toko kue.
                </div>
              </center>
            </Col>
            <Col md="6">
              <img
                src="https://cdn1-production-images-kly.akamaized.net/Dxn-R7II5WapLrLDBkjW6kRyeKw=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2338162/original/030676300_1534997231-tupperware_dot_co_dot_id.jpg"
                width="100%"
                height="250px"
              />
            </Col>
          </Row>

          <Row className="pt-10">
            <Col md="6">
              <img
                src="http://www.dapurkobe.co.id/wp-content/uploads/kue-radin-koneng.jpg"
                width="100%"
                height="250px"
              />
            </Col>
            <Col md="6">
              <center>
                <div className="card-pure-judul"> Kue Radin Koneng </div>
                <div className="card-pure">
                  Resep Kue Radin Koneng, resep kreasi kue khas nusantara dengan
                  nama yang unik. Kue ini adalah kue yang terbuat dari tape
                  singkong yang mirip dengan kue bolu. Pengolahannya praktis dan
                  rasanya...
                </div>
              </center>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
