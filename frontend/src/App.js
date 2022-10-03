import "./App.css";
import React, { Component } from "react";
import NavbarPley from "./components/NavbarPley";
import RestaurantCard from "./components/RestaurantCard";
import ReviewForm from "./components/ReviewForm";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route, Link, useRouteMatch, useParams } from "react-router-dom";

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
    this.state = {};
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
          <NavbarPley />
          {/* <RestaurantCard recipes={this.state.recipe} /> */}
          <h1>Recipe</h1>
          <ReviewForm addReview={this.addReview} />
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
