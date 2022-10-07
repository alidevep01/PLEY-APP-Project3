import React, { Component, useState } from "react";
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
            recipes: {
                id: '',
                image: '',
                title: '',
                imageType: '',
                isSelected: false
            },
            selectedRecipe: ''
        }
    }

    // recipeClick(selectedRecipe){
    //     const { allRecipes } = this.state
    //     console.log('recipeclick:',selectedRecipe.target.id)
    //     this.setState({
    //         recipes: this.props.recipes.map(recipe => ({
    //             isSelected: (recipe.id === selectedRecipe) ? !recipe.isSelected : recipe.isSelected
    //         }))
    //     })
    // }

    recipeClick(event) {
        console.log('selectedRecipe:', event.target.id)
        this.setState({ selectedRecipe: event.target.value})
    }

  render() {
    

    
    console.log("cardmap", this.props.recipes.results);
    if (this.props.recipes.results == null) {
      console.log("recipes are null");
    } else {
      return (
        <div className="recipeCard">
        {recipeId(this.props.recipes)}
        {selectRecipe(this.props.recipes)}
          <Row xs={1} md={2} lg={3} xl={4} xll={5} className="g-4">
            {this.props.recipes.results.map((results) => {
              console.log(results.id);
              console.log('results:', results);
              return (
                <Col>
                  <Card>
                    {/* <Link to={'/recipe/' + results.id}>
                        <Card.Img variant="top" src={results.image} />
                    </Link> */}
                    <a href={"/recipe/" + results.id}>
                      <Card.Img variant="top" src={results.image} onClick={() => selectRecipe(results.id)}/>
                    </a>
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
          <RecipeId selectedRecipeId={this.props.recipes.results} />
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

const recipeId = (props) => {
    console.log(props)
    return(
        <div>
            {props.results.map((results) => {
                console.log('recipeIdResults:', results)
            })}
            {/* map function here */}
            {/* another function below to filter this result */}
        </div>
    )
}
export function selectRecipe(props) {
    // console.log('functionfilter:', props.results)
    const selectedRecipe = props.results.filter(recipe => recipe.results.includes(this.props.recipe))
    console.log('filteredrecipe', selectedRecipe)
    return(
        <div>
            {}
        </div>
    )
}

// let selectedRecipes = recipeId().filter(selectedRecipe => selectedRecipe.title = this.props.recipes)

// console.log(selectedRecipes)

// recipeId()
 

export default RestaurantCard;
