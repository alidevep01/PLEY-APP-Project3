import "./App.css";
import React, { Component } from "react";
import NavbarPley from "./components/NavbarPley";
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
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
    };
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
        <ReviewForm addReview={this.addReview}/>
        <Footer />
      </div>
    );
  }
}

export default App;
