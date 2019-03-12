import React, { Component } from "react";
import { Jumbotron, Button, Form, FormGroup, Label, Input } from "reactstrap";
export default class jumbotron extends Component {
  render() {
    return (
      <div>
        <Jumbotron className="bg_jumbotron text-center">
          <div className="header-jumbotron">{this.props.data}</div>
          <div className="col-sm-12 col-md-6 offset-md-3">
            <Form inline>
              <FormGroup>
                <Input
                  type="email"
                  name="email"
                  width="100%"
                  id="exampleEmail"
                  placeholder="something@idk.cool"
                />
                <Button color="primary">Learn More</Button>
              </FormGroup>
            </Form>
          </div>
        </Jumbotron>
      </div>
    );
  }
}
