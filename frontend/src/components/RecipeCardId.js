import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../App.css";
import { Link } from "react-router-dom";

class RecipeCardId extends Component {
    render() {
      console.log('cardid:', this.props.recipes)
      if (this.props.recipes.results == null) {
        console.log("null");
      } else {
        console.log(this.state.recipes)
        return (
          <div className="recipeCard">
            <h1>{this.props.recipes.title}</h1>
          </div>
        );
      }
    }
  }
  
  export default RecipeCardId;