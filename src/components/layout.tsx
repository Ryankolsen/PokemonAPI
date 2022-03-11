import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavDropdown, Navbar, Nav, Container } from "react-bootstrap";

export default class Layout extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="https://pokemongolive.com/en/">
              Catch 'em!
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/About">About</Nav.Link>
              <Nav.Link href="https://pokeapi.co/">Pokemon!</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <div className="body">{this.props.children}</div>
      </div>
    );
  }
}
