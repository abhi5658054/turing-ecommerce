import React, { Component } from "react";
import Navbar from "react-bulma-components/lib/components/navbar";
import {
  Field,
  Label,
  Input,
  Control
} from "react-bulma-components/lib/components/form";

class NavBar extends Component {
  state = {
    open: false
  };
  render() {
    let { open } = this.state;
    return (
      <Navbar color="white" fixed="top" active={open} transparent={true}>
        <Navbar.Brand>
          <Navbar.Item renderAs="a" href="#">
            <img
              src="superkart-full.png"
              alt="Superkart: Joy, delivered at your doorstep!"
              height="35"
            />
          </Navbar.Item>
          <Navbar.Burger
            active={open}
            onClick={() =>
              this.setState({
                open: !this.state.open
              })
            }
          />
        </Navbar.Brand>
        <Navbar.Menu active={open}>
          <Navbar.Container>
            <Navbar.Item>
              <Field>
                <Control>
                  <Input placeholder="Search" />
                </Control>
              </Field>
            </Navbar.Item>
          </Navbar.Container>
          <Navbar.Container position="end">
            <Navbar.Item href="#">Cart</Navbar.Item>
            <Navbar.Item href="#">Login</Navbar.Item>
          </Navbar.Container>
        </Navbar.Menu>
      </Navbar>
    );
  }
}

export default NavBar;
