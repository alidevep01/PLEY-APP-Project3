import "./App.css";
import React, { Component } from "react";
import NavbarPley from "./components/NavbarPley";
import RestaurantCard from "./components/RestaurantCard";
import ReviewForm from "./components/ReviewForm";
import Footer from "./components/Footer";

let baseURL = "";

// if(process.env.NODE_ENV === 'development') {
//   baseURL = 'http://localhost:3000'
// } else {
//   baseURL = 'heroku backend url'
// }

baseURL = `${process.env.REACT_APP_BACKEND_URL}`;

console.log("current base url: ", baseURL);

class App extends Component {
  constructor(props){
      super(props)
      this.state = {
          baseURL: `https://api.spoonacular.com/recipes/complexSearch`,
          apiKey: `?apiKey=a5bc09310d4c4673a21e07e15aa11be6&`,
          recipe:''
      }
  }

  handleChange = (event) => {
      event.preventDefault()
      console.log(event.target.id)
      console.log(event.target.value)
  
      this.setState({
          [event.target.id]: event.target.value
      })
  }

  handleSubmit = (event) => {
      event.preventDefault()
      this.setState({
          searchURL: this.state.baseURL + this.state.apiKey + 'cuisine=' + this.state.recipe
      }, () => {
          fetch(this.state.searchURL)
              .then((response) => response.json())
              .then(json => this.setState({
                  recipe: json,
                  // giphy: ''
              }), (err) => console.log(err))
      })
      console.log(this.state.recipe)
  }

  componentDidMount() {
    this.getReviews();
  }

  getReviews = () => {
    fetch(baseURL + "/pley")
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          return [];
        }
      })
      .then((data) => {
        console.log(data);
        this.setState({ reviews: data.reviews });
      });
  };
  
  addReview = (review) => {
    const copyReview = [...this.state.reviews]
    copyReview.unshift(review)
    this.setState({
      reviews: copyReview,
      name: '',
      score: 0,
      review: ''
    })
  }

  render() {
    return (
      <div>
        <NavbarPley />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h1>Recipe</h1>
          <form onSubmit={this.handleSubmit}>
              <label>Title</label>
              <input
                  id='recipe'
                  type='text'
                  placeholder='Enter Recipe Here'
                  value={this.state.recipe}
                  onChange={this.handleChange}
              />

              <input
                  type='submit'
                  value='Search For Recipe'
              />
          </form>
        <RestaurantCard recipes={this.state.recipe}/>
        <ReviewForm addReview={this.addReview}/>
        <Footer />
      </div>
    );
  }
}

export default App;
