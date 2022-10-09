import React, { Component, useState } from "react";
/* Components */
import RestaurantCard from "./RestaurantCard";
import RecipeCardId from "./RecipeCardId";
import RecipeId from "./RecipeId";
import css from "../App.css";

// import RecipeMap from './RecipeMap'
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ButtonGroup from "react-bootstrap/ButtonGroup";
/* React Router */
import { Link } from "react-router-dom";
import ReviewForm from "./ReviewForm";
import "../App.css";

// let recipe = "";

class NavbarPley extends Component {
  constructor(props) {
    super(props);
    this.state = {
      baseURL: this.props.baseURL,
      apiKey: this.props.apiKey,
      recipe: "",
      selectedRecipe: "",
    };
  }

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     baseURL: `https://api.spoonacular.com/food/search`,
  //     apiKey: `?apiKey=a5bc09310d4c4673a21e07e15aa11be6&`,
  //     recipe: "",
  //   };
  // }

  handleChange = (event) => {
    event.preventDefault();
    console.log(event.target.id);
    console.log(event.target.value);

    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    console.log("handleSubmit", this.state.recipe);
    event.preventDefault();
    this.setState(
      {
        searchURL: this.state.baseURL + this.state.apiKey + "cuisine=" + this.state.recipe + "&number=12",
      },
      () => {
        fetch(this.state.searchURL)
          .then((response) => response.json())
          .then(
            (json) =>
              this.setState({
                recipe: json,
                // giphy: ''
              }),
            (err) => console.log(err)
          );
      }
    );
    console.log(this.state.recipe);
    console.log("eventtarget:", event.target);
  };

  handleClick = (event) => {
    event.preventDefault();
    this.setState({
      selectedRecipe: this.props.recipe,
    });
    console.log("handleclick:", this.props.recipe.results.id);
  };

  render() {
    return (
      <div id="showPage">
        <Navbar bg="light" expand="lg" fixed="top">
          <Container>
            <Navbar.Brand href="/">
              {" "}
              <img alt="" src="https://iili.io/s3jy11.md.png" width="60" height="60" className="d-inline-block align-top" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Form onSubmit={this.handleSubmit} className="d-flex">
                  <Form.Control id="recipe" type="text" placeholder="Cuisine Type" className="me-2" aria-label="Search" onChange={this.handleChange} value={this.state.recipe} />
                  {/* <Form.Control type="search" placeholder="Location" className="me-2" aria-label="Search" /> */}
                  <Button variant="danger" type="submit">
                    <img src="https://img.icons8.com/ios-glyphs/25/FFFFFF/search--v1.png" onSubmit={this.handleClick} />
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
        <RecipeId className= 'recipeID'selectedRecipeId={this.state.selectedRecipe} />
        <ReviewForm addReview={this.addReview} recipes={this.state.recipe} />
        <RestaurantCard recipes={this.state.recipe} />
        {/* <RecipeMap recipes={this.state.recipe}/> */}
      </div>
    );
  }
}

export default NavbarPley;
