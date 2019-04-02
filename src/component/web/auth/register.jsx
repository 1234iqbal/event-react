import React, { Component } from "react";
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";
export default class register extends Component {
  state = {
    email: "",
    name: "",
    password: ""
  };

  handleChangeName = e => {
    this.setState({ name: e.target.value });
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
      .post("https://api-event-react.herokuapp.com/api/register", {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      })
      .then(res => {
        console.log(res.data.token.original.access_token);
        sessionStorage.setItem("token", res.data.token.original.access_token);
      });
  };

  render() {
    return (
      <div className="card-login pt-4 pb-5">
        <Form onSubmit={this.handleSubmit}>
          <Container>
            <h4 className="text-center pb-3">Daftar</h4>

            <FormGroup>
              <Label for="exampleAddress">Full Name</Label>
              <Input
                type="text"
                onChange={this.handleChangeName}
                name="name"
                placeholder="Full Name "
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleAddress">Email</Label>
              <Input
                type="email"
                name="Email"
                onChange={this.handleChangeEmail}
                placeholder="Email"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleAddress2">Password</Label>
              <Input
                type="password"
                name="Password"
                onChange={this.handleChangePassword}
                placeholder="Password"
              />
            </FormGroup>
            <hr />
            <Button color="success" type="submit" block>
              Daftar
            </Button>
          </Container>
        </Form>
      </div>
    );
  }
}
