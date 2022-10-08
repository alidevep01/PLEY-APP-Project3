import React, { Component, useState } from "react";
// import { selectRecipe } from "./RestaurantCard";
import { Link, useLocation } from "react-router-dom";
import Card from "react-bootstrap/Card";
import css from "../App.css";

// class RecipeId extends Component {

//     constructor(props) {
//         super(props)
//         this.state = {
//             baseURL: this.props.baseURL,
//             apiKey: this.props.apiKey,
//             recipe: '',
//             recipes: this.props.recipes,
//             selectedRecipe: this.props.selectedRecipe
//         };
//         const location = useLocation()
//         const state = location.state
//         console.log(state)
//     }
//     render() {
//         // selectRecipe()
//         return (
//             <div>
//                 <h1>I am Recipe ID</h1>
//                 {console.log('recipeId:', this.state.selectedRecipe)}
//             </div>
//          );

//     }
// }

// export default RecipeId;

const RecipeId = (props) => {
  const location = useLocation();
  const state = location.state;
  console.log("stateID", state);
  if (state === null) {
    console.log("recipes are null");
  } else {
    return (
      <Card id='cardId'>
        {/* <h1>I am Recipe ID</h1> */}
        {/* {console.log(this.props.selectedRecipe)} */}
        
        <Card.Img  src={state.image} />
        <Card.Body>
            <Card.Title>{state.title}</Card.Title>
        </Card.Body>
      </Card>
    );
  }
};

export default RecipeId;
