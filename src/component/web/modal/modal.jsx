import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Container
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
        <Button outline color="success" onClick={this.toggle}>
          Masuk
        </Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle} className="pt-10">
          <ModalBody className="pb-3">
            <div className="text-center">
              <img
                src="http://www.tobystevens.co.uk/wp-content/uploads/2012/04/7.-SAMSUNG_COFFEE_CAFE_LOGO_GRAPHIC-960x960.jpg"
                width="80px"
                height="80px"
              />
            </div>
            <h2 className="pb-4 text-center">
              <strong>MINUMANKU</strong>
            </h2>
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
