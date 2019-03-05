import React, { Component } from "react";
import Navbar from "react-bulma-components/lib/components/navbar";

class NavBar extends Component {
  state = {
    open: false
  };
  render() {
    let { open } = this.state;
    return (
      <Navbar color="white" fixed="top" active="false" transparent="true">
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
            <Navbar.Item href="#">Abhishek</Navbar.Item>
          </Navbar.Container>
          <Navbar.Container position="end">
            <Navbar.Item href="#">At the end</Navbar.Item>
          </Navbar.Container>
        </Navbar.Menu>
      </Navbar>
    );
  }
}

export default NavBar;
