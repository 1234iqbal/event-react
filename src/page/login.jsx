import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";
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
              <div className="card-login pt-4 pb-5">
                <Form>
                  <Container>
                    <h4 className="text-center pb-4">Masuk</h4>

                    <FormGroup>
                      <Label for="exampleAddress">Email</Label>
                      <Input type="email" name="Email" placeholder="Email" />
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleAddress2">Password</Label>
                      <Input
                        type="password"
                        name="Password"
                        placeholder="Password"
                      />
                    </FormGroup>

                    <FormGroup check className="pb-3">
                      <Input type="checkbox" name="check" id="exampleCheck" />
                      <Label for="exampleCheck" check>
                        Check me out
                      </Label>
                    </FormGroup>
                    <Button color="success" block>
                      Sign in
                    </Button>
                  </Container>
                </Form>
              </div>
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
