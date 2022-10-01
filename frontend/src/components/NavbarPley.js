import React, { Component } from "react";
import RestaurantCard from './RestaurantCard'
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ButtonGroup from "react-bootstrap/ButtonGroup";


let recipe = ''

class NavbarPley extends Component {
  constructor(props){
    super(props)
    this.state = {
        baseURL: `https://api.spoonacular.com/recipes/complexSearch`,
        apiKey: `?apiKey=a5bc09310d4c4673a21e07e15aa11be6&`,
        recipe:''
    }
  }

  handleChange = (event) => {
      event.preventDefault()
      console.log(event.target.id)
      console.log(event.target.value)

      this.setState({
          [event.target.id]: event.target.value
      })
  }

  handleSubmit = (event) => {
      event.preventDefault()
      this.setState({
          searchURL: this.state.baseURL + this.state.apiKey + 'cuisine=' + this.state.recipe
      }, () => {
          fetch(this.state.searchURL)
              .then((response) => response.json())
              .then(json => this.setState({
                  recipe: json,
                  // giphy: ''
              }), (err) => console.log(err))
      })
      console.log(this.state.recipe)
  }

  render() {
    return (
      <div>
      <Navbar bg="light" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="#home">
            {" "}
            <img alt="" src="https://iili.io/s3jy11.md.png" width="60" height="60" className="d-inline-block align-top" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Form onSubmit={this.handleSubmit} className="d-flex">
                <Form.Control id='recipe'type="text" placeholder="Cuisine Type" className="me-2" aria-label="Search" value={this.state.recipe} onChange={this.handleChange}/>
                {/* <Form.Control type="search" placeholder="Location" className="me-2" aria-label="Search" /> */}
                <Button variant="danger" type="submit">
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
      <RestaurantCard recipes={this.state.recipe} />
      </div>
    );
  }
}

export default NavbarPley;
