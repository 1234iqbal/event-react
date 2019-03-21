import React, { Component } from "react";
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavbarToggler,
  Nav,
  NavLink,
  NavItem,
  Form,
  FormGroup,
  Input
} from "reactstrap";
import { Link } from "react-router-dom";
import Modal from "./modal";
export default class navbar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="white" light expand="md">
          <Link to="/">
            <NavbarBrand>
              <div className="text">
                <img
                  src="http://www.tobystevens.co.uk/wp-content/uploads/2012/04/7.-SAMSUNG_COFFEE_CAFE_LOGO_GRAPHIC-960x960.jpg"
                  width="40px"
                  height="40px"
                />
                MINUMANKU
              </div>
            </NavbarBrand>
          </Link>
          <Form inline>
            <FormGroup className="mb-0 mr-sm-2 mb-sm-0">
              <Input type="text" name="text" placeholder="Cari Minuman.." />
            </FormGroup>
          </Form>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/" className="link">
                  <NavLink>Beranda</NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/daftar_seluruh_minuman" className="link">
                  <NavLink>Daftar Minuman</NavLink>
                </Link>
              </NavItem>
            </Nav>
            <Modal />
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
