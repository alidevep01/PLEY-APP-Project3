import React, { Component, useState } from "react";
// import { selectRecipe } from "./RestaurantCard";
import { Link, useLocation } from "react-router-dom";

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
      <div>
        {/* <h1>I am Recipe ID</h1> */}
        {/* {console.log(this.props.selectedRecipe)} */}
        <img src={state.image} />
        <h1>{state.title}</h1>
      </div>
    );
  }
};

export default RecipeId;
