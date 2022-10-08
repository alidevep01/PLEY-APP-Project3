import React, { Component, useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../App.css";
import { Link } from "react-router-dom";
import RecipeId from "./RecipeId";

class RestaurantCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            recipes: {},
            selectedRecipe: {},
            recipeArray: this.props.recipes,
            hidden: {}
        }
        this.recipeClick = this.recipeClick.bind(this)
    }

    recipeClick(event) {
      console.log('clickedRecipe:', event)
      this.setState(() => ({ hidden: {display: 'none'}}))
      // this.setState(event)
      // return arr.findIndex(event => event.target.id === id)
      // this.setState({selectedRecipe: event.target})
          // (event.target.id === this.props.recipes.results.id) && (console.log(this.props.recipes))
      
      // document.getElementsById('cardMap').style.visibility = 'hidden'
      }

  render() {
    console.log("cardmap", this.props.recipes.results);
    // {RecipeArray(this.props.recipes)}
    if (this.props.recipes.results == null) {
      console.log("recipes are null");
    } else {
      return (
        <div className="recipeCard" >
        {/* {RecipeIdFunction(this.props.recipes)} */}
        
        {/* {selectRecipe(this.props.recipes)} */}
        {RecipeArray(this.props.recipes.results)}
          <Row xs={1} md={2} lg={3} xl={4} xll={5} className="g-4" id='cardMap'style={{visibility: 'visible'}} >
            {this.props.recipes.results.map((results) => {
                
              console.log('results:',results);
            //   console.log('results:', results);
              return (
                <Col>
                  <Card>
                    <Link to={'/recipe/' + results.id} onClick={this.recipeClick} state={results} >
                        <Card.Img variant="top" src={results.image} id={results.id} title={results.title} image={results.image} value={results.id}/>
                    </Link>
                    {/* <a href={"/recipe/" + results.id}>
                      <Card.Img variant="top" src={results.image} />
                    </a> */}
                    <Card.Body>
                      <Card.Title style={{ height: "88px" }}>{results.title}</Card.Title>
                      <Card.Text></Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
          {/* {console.log('selectedRecipeId:', this.props.recipes.id)} */}
          {/* <RecipeId recipes={this.state.selectedRecipe} /> */}
          {/* {console.log('recipeArray:', this.props.recipeArray)} */}
        </div>
      );
    }
  }
}

// write function for recipeId
// create variable in function to receive single recipe
// pass variable as single prop
// export variable as prop into id component
// import into recipeId

// const recipeId = (props) => {
//     console.log(props)
//     return(
//         <div>
//             {props.results.map((results) => {
//                 console.log('recipeIdResults:', results)
//             })}
//             {/* map function here */}
//             {/* another function below to filter this result */}
//         </div>
//     )
// }

export function RecipeArray(recipe) {
    console.log('arrayrecipe', recipe)
    const selectedRecipe = recipe.find(recipe => recipe.results === 1)
    console.log('selectedRecipe:', selectedRecipe)
    return(
        <div className="recipes" key={selectedRecipe}>
            <h1>Recipe: {selectedRecipe}</h1>
        </div> 
    )
}

// const RecipeIdFunction = (props) => {
//     console.log(props)
//     return(
//         <div>
//             {props.results.map((results) => {
//                 console.log('recipeIdResults:', results)
//             })}
//             {/* map function here */}
//             {/* another function below to filter this result */}
//         </div>
//     )
// }

// export function selectRecipe(props) {
//     // console.log('functionfilter:', props.results)
//     const selectedRecipe = props.results.filter(recipe => recipe.results.includes(this.props.recipe))
//     console.log('filteredrecipe', selectedRecipe)
//     return(
//         <div>
//             {}
//         </div>
//     )
// }

// const selectedRecipe = this.state.recipes.results.map(recipe => ({id: recipe.id, title: recipe.title, image: recipe.image, imageType: recipe.imageType}).sort(el1, el2) => el1.id - el2.id)

export function SelectedRecipe(props) {
    const [selectedRecipe, setSelectedRecipe] = ([])

    useEffect(() => {
        if(props) setSelectedRecipe(props.map(recipe => ({id: recipe.id, title: recipe.title, image: recipe.image, imageType: recipe.imageType})))
    })
}

// let selectedRecipes = recipeId().filter(selectedRecipe => selectedRecipe.title = this.props.recipes)

// console.log(selectedRecipes)

// recipeId()
 

export default RestaurantCard;
