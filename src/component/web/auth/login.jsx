import React, { Component } from "react";
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";
export default class login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChangeEmail = e => {
    this.setState({ email: e.target.value });
  };
  handleChangePassword = e => {
    this.setState({ password: e.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    axios
      .post("https://api-event-react.herokuapp.com/api/login", {
        email: this.state.email,
        password: this.state.password
      })
      .then(res => {
        console.log(res.data);
        const data = res.data;
        sessionStorage.setItem("myData", JSON.stringify(data));
      });
  };

  render() {
    return (
      <div className="card-login pt-4 pb-5">
        <Form onSubmit={this.handleSubmit}>
          <Container>
            <h4 className="text-center pb-4">Masuk</h4>

            <FormGroup>
              <Label for="exampleAddress">Email</Label>
              <Input
                type="email"
                onChange={this.handleChangeEmail}
                name="email"
                placeholder="Email"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleAddress2">Password</Label>
              <Input
                type="password"
                onChange={this.handleChangePassword}
                name="password"
                placeholder="Password"
              />
            </FormGroup>

            <FormGroup check className="pb-3">
              <Input type="checkbox" name="check" id="exampleCheck" />
              <Label for="exampleCheck" check>
                Check me out
              </Label>
            </FormGroup>
            <Button color="success" block type="submit">
              Sign in
            </Button>
          </Container>
        </Form>
      </div>
    );
  }
}
