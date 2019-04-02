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
import axios from "axios";
export default class searchBar extends Component {
  state = {
    name: ""
  };

  handleChangeName = e => {
    this.setState({ name: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    axios
      .post("https://api-event-react.herokuapp.com/api/search/all/", {
        name: this.state.name
      })
      .then(res => {
        console.log(res);
      });
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Card>
            <CardBody>
              <div>
                <Button color="success" type="submit" block>
                  Cari
                </Button>
              </div>
              <CardTitle>
                <hr />
                <FormGroup>
                  <Label for="examplename">
                    <b>Name</b>
                  </Label>
                  <Input
                    type="name"
                    name="name"
                    onChange={this.handleChangeName}
                    placeholder="Name"
                  />
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
                  <FormGroup check>
                    <Label check>
                      <Input type="radio" name="radio1" /> Nanda Mandiri
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
