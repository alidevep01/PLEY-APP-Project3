import React, { Component, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../App.css";
import { Link } from "react-router-dom";


class RecipeCardId extends Component {
  constructor(props){
    super(props)
    this.state = {
      recipes: '',
      selectedRecipe: {}
    }
  }

  // create function to find single recipe
    //  on index page onClick() to find object in array of results
    // map through array
    // if else statement to show the clicked object
    // set state of object so we can prop it indiviually to other components
      // object needs to match :id in url
    // read props in component to display title, image, etc..
  

  // recipeClick = () => {
  //   let selectedRecipe = {}

  //   this.setState({
  //     selectedRecipe: 
  //   });
  // }

  let 
    render() {
      console.log('cardid:', this.props.selectedRecipe)
      if (this.props.recipes.results == null) {
        console.log("null");
      } else {
        console.log(this.props.recipes)
        return (

          <div className="recipeCard">
            {this.props.recipes.map(selectedRecipe => selectedRecipe.results === selectedRecipe.target.results)}
          </div>
        );
      }
    }
  }



// recipeShow()
  
  
  export default RecipeCardId;