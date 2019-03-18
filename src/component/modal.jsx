import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
export default class modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  render() {
    return (
      <div>
        <Button outline color="primary" onClick={this.toggle}>
          Masuk / Daftar
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalBody>
            <Form>
              <FormGroup>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="Masukan Email"
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="Masukan Password"
                />
              </FormGroup>
              <Button color="primary" block>
                Login
              </Button>
              <Button color="success" block>
                Lupa Password
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
