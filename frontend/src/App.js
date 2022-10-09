import "./App.css";
import React, { Component } from "react";
import NavbarPley from "./components/NavbarPley";
import RestaurantCard from "./components/RestaurantCard";
import ReviewForm from "./components/OLD - ReviewForm";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route, Outlet, Link, useRouteMatch, useParams } from "react-router-dom";
import ShowPage from "./pages/ShowPage";
import RecipeCardId from "./components/RecipeCardId";
import RecipeId from "./components/RecipeId";
import ReviewFormNew from "./components/ReviewFormNew";

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
      // apiKey: `?apiKey=a5bc09310d4c4673a21e07e15aa11be6&`,
      apiKey: `?apiKey=525d936c594d4320af982f3dc9d49a4e&`,
      recipe: "",
      selectedRecipe: "",
      reviews: []
    };
  }

  componentDidMount(){
    this.getReviews()
  }

  getReviews = () => {
    fetch(baseURL + '/pley')
    .then((res) => {
      if(res.status === 200) {
        return res.json()
      }else{
        return []
      }
    })
    .then((data) => {
      console.log('data', data)
      if(data === []) {
        this.setState({ reviews: data})
      }else{
        this.setState({reviews: data.reviews})
      }
    })
  }

  handleAddReview = (review) => {
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
        {console.log('appJsGet:', this.state.reviews)}
        <Router>
          <div className="mainContainer">
            <NavbarPley recipes={this.state.recipe} baseURL={this.state.baseURL} reviews={this.state.reviews} apiKey={this.state.apiKey} />
            {/* <RestaurantCard recipes={this.state.recipe} /> */}
            <Routes>
              <Route path="/recipe" element={<ShowPage recipes={this.state.recipe} />}>
                {/* <Route path=":id" element={<Reviews/>} /> */}
                {/* <Route path=":id" element={<RecipeCardId recipes={this.state.recipe} />} /> */}
              </Route>
              {/* <Route path="/reviews" element={<Reviews />}></Route> */}
            </Routes>
            <ReviewFormNew handleAddReview={this.handleAddReview} reviews={this.state.reviews}/>
          </div>
          <Footer />
        </Router>
      </>
    );
  }
}

function Recipes() {
  return (
    <main>
      <h2>This Is My Recipe</h2>
    </main>
  );
}

function Reviews() {
  return (
    <main>
      <ReviewForm addReview={App.addReview} />
    </main>
  );
}

export default App;
