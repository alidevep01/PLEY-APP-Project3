import "./App.css";
import React, { Component } from "react";
import NavbarPley from "./components/NavbarPley";
import RestaurantCard from "./components/RestaurantCard";
import ReviewForm from "./components/ReviewForm";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route, Outlet, Link, useRouteMatch, useParams } from "react-router-dom";
import ShowPage from "./pages/ShowPage";
import RecipeCardId from './components/RecipeCardId'
import RecipeId from './components/RecipeId'

let baseURL = "";

// if(process.env.NODE_ENV === 'development') {
//   baseURL = 'http://localhost:3000'
// } else {
//   baseURL = 'heroku backend url'
// }

baseURL = `${process.env.REACT_APP_BACKEND_URL}`;

console.log("current base url: ", baseURL);


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      baseURL: `https://api.spoonacular.com/recipes/complexSearch`,
      apiKey: `?apiKey=a5bc09310d4c4673a21e07e15aa11be6&`,
      recipe: "",
      selectedRecipe: ''
    };
  }

  addReview = (review) => {
    const copyReview = [...this.state.reviews];
    copyReview.unshift(review);
    this.setState({
      reviews: copyReview,
      name: "",
      score: 0,
      review: "",
    });
  };

  render() {
    return (
      <>
        <div className="mainContainer">
          <NavbarPley recipes={this.state.recipe} baseURL={this.state.baseURL} apiKey={this.state.apiKey}/>
          {/* <RestaurantCard recipes={this.state.recipe} /> */}
          <h1>Recipe</h1>
          <Routes>
            <Route path="/recipe" element={<ShowPage recipes={this.state.recipe}/>}>
              <Route path=":id" element={<RecipeId selectedRecipes={this.state.recipe}/>}/>
            </Route>
            <Route path="/reviews" element={<Reviews/>}></Route>
            <Route path="/" element={<RestaurantCard recipes={this.state.recipe}/>}/>
          </Routes>
          {/* <ReviewForm addReview={this.addReview} /> */}
        {/* <RecipeId recipes={this.state.recipe}/> */}
        </div>
        <Footer />
      </>
    );
  }
}

function Recipes() {
  return (
    <main>
      <h2>This Is My Recipe</h2>
    </main>
  )
}

// function RecipeId() {
//   return(
//     <main>
//       <h2>This is my specific recipe</h2>
//     </main>
//   )
// }

function Reviews() {
  return(
    <main>
      <ReviewForm addReview={App.addReview}/>
    </main>
  )
}

export default App;
