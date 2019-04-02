import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Login from "../../component/web/auth/login";
import { Link } from "react-router-dom";
export default class login extends Component {
  render() {
    return (
      <div className="pt-5">
        <Link to="/" className="link ">
          <h2 class="text text-center ">Minumanku</h2>
        </Link>
        <Container className="pt-3 pb-8 pt-5">
          <Row>
            <Col md="7" className="pb-8">
              <center>
                <img
                  src="https://lh3.googleusercontent.com/proxy/uYtfuLhosAq_1gfJ3L2pBQdGX71BHM9kxHHlypMlVHWbW0y_joLwCzApxJ3epHHyAX42u1y1xuMkHiJsrDYoXNFx6iYRmvpYVbxRPsfCLehjNi43eB8=s0-d"
                  className="image-login"
                />
              </center>
            </Col>
            <Col md="4" className="pb-5">
              <Login />
            </Col>
          </Row>
          <hr />
          <footer>
            <div> @copy right 2019 Rumah Sehat nanda marinanda</div>
          </footer>
        </Container>
      </div>
    );
  }
}
