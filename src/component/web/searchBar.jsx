import React, { Component } from "react";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
export default class searchBar extends Component {
  render() {
    return (
      <div>
        <Form>
          <Card>
            <CardBody>
              <div>
                <Button color="success" block>
                  Cari
                </Button>
              </div>
              <CardTitle>
                <hr />
                <FormGroup>
                  <Label for="examplename">
                    <b>Name</b>
                  </Label>
                  <Input type="name" name="name" placeholder="Name" />
                </FormGroup>
              </CardTitle>
              <CardTitle>
                <hr />
                <FormGroup tag="fieldset">
                  <Label for="examplename">
                    <b>Kategori</b>
                  </Label>
                  <FormGroup check>
                    <Label check>
                      <Input type="radio" name="radio1" /> Minuman
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input type="radio" name="radio1" /> Makanan
                    </Label>
                  </FormGroup>
                  <FormGroup check disabled>
                    <Label check>
                      <Input type="radio" name="radio1" disabled /> All
                    </Label>
                  </FormGroup>
                </FormGroup>
              </CardTitle>
              <CardTitle>
                <hr />
                <FormGroup tag="fieldset">
                  <Label for="examplename">
                    <b>pengiriman</b>
                  </Label>
                  <FormGroup check>
                    <Label check>
                      <Input type="radio" name="radio1" /> JNE
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input type="radio" name="radio1" /> TIKI
                    </Label>
                  </FormGroup>
                  <FormGroup check disabled>
                    <Label check>
                      <Input type="radio" name="radio1" disabled /> NANDA
                    </Label>
                  </FormGroup>
                </FormGroup>
              </CardTitle>
            </CardBody>
          </Card>
        </Form>
      </div>
    );
  }
}
