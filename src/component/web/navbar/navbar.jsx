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
  Input,
  DropdownToggle,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  Button
} from "reactstrap";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import { Link, withRouter } from "react-router-dom";
import Modal from "../modal/modal";
import axios from "axios";
class navbar extends Component {
  state = {
    data: [],
    isOpen: false,
    name: "",
    count: 0
  };

  componentDidMount() {
    axios
      .get("https://api-event-react.herokuapp.com/api/category/")
      .then(res => {
        const data = res.data;
        this.setState({ data });
      });

    const count = JSON.parse(localStorage.getItem("barang"));
    this.setState({ count: count || 0 });
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = () => {
    this.props.history.push("/");
  };

  search = e => {
    axios
      .post("https://api-event-react.herokuapp.com/api/search/all/", {
        name: this.state.name
      })
      .then(res => {
        this.props.history.push({
          pathname: "/search",
          search: "?name=" + this.state.name,
          state: { data: res.data }
        });
      });
  };

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
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
              <Input
                placeholder="name"
                type="name"
                name="name"
                onChange={this.handleChange}
              />
              <Button onClick={this.search}> search </Button>
            </FormGroup>
          </Form>

          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Link to="/chart">
              <IconButton aria-label="Cart">
                <Badge badgeContent="1" color="secondary">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Link>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Kategori
                </DropdownToggle>
                <DropdownMenu right>
                  {this.state.data.map(res => (
                    <Link
                      key={res.id}
                      to={"/category/" + res.id}
                      className="link"
                    >
                      <DropdownItem key={res.id}>{res.name}</DropdownItem>
                    </Link>
                  ))}
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <Link to="/register" className="link">
                  <NavLink>Daftar</NavLink>
                </Link>
              </NavItem>

              {/* <NavItem>
                <NavLink>
                  <IconButton aria-label="Cart">
                    <Badge>
                      <ShoppingCartIcon />
                    </Badge>
                  </IconButton>
                </NavLink>
              </NavItem> */}
            </Nav>
            <Modal />
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default withRouter(navbar);
