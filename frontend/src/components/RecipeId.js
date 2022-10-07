import React, { Component, useState, } from "react";
import { selectRecipe } from "./RestaurantCard";


class RecipeId extends Component {
    constructor(props) {
        super(props)
        this.state = {
            baseURL: this.props.baseURL,
            apiKey: this.props.apiKey,
            recipe: '',
            recipes: this.props.recipes,
            selectedRecipe: this.props.selectedRecipe
        };
    }
    render() { 
        // selectRecipe()
        return ( 
            <div>
                <h1>I am Recipe ID</h1>
                {console.log('recipeId:', this.state.selectedRecipe)}
            </div> 
         );
         
    }
}


 
export default RecipeId;

// const RecipeId = () => {
//     const [item] = useState()
//     return (
//         <div>
//             <h1>I am Recipe ID</h1>
//             {console.log(this.props.selectedRecipe)}
//         </div>
//     )
// }

// export default RecipeId