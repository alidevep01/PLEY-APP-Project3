import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ButtonGroup from "react-bootstrap/ButtonGroup";

class NavbarPley extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="#home">
            {" "}
            <img alt="" src="https://iili.io/s3jy11.md.png" width="60" height="60" className="d-inline-block align-top" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Form className="d-flex">
                <Form.Control type="search" placeholder="Resturants" className="me-2" aria-label="Search" />
                <Form.Control type="search" placeholder="Location" className="me-2" aria-label="Search" />
                <Button variant="danger">
                  <img src="https://img.icons8.com/ios-glyphs/25/FFFFFF/search--v1.png" />
                </Button>
              </Form>
              <Nav.Link href="#home"></Nav.Link>
              <Nav.Link href="#link"></Nav.Link>
            </Nav>
            <ButtonGroup aria-label="NavbarPley">
              <Button variant="outline-danger">Login</Button>
              <Button variant="danger">Signup</Button>
            </ButtonGroup>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavbarPley;
