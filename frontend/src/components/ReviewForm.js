import React from "react";
import css from "../App.css";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import StarRating from "./StarRating";
import Reviews from "./Reviews";

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      score: 0,
      review: "",
      reviewId: this.props.recipes,
      reviews: [],
    };
  }

  componentDidMount() {
    this.loadList();
  }

  handleChange = (event) => {
    console.log(event.target.name, event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleChangeRating = (rating) => {
    this.setState({
      score: rating,
    });
  };
  loadList = () => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/pley/${window.location.pathname.split("/")[2]}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((resJson) => {
        // this.props.addReview(resJson);
        this.setState({
          reviews: resJson.reviews.reverse(),
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    fetch(`${process.env.REACT_APP_BACKEND_URL}/pley/${window.location.pathname.split("/")[2]}`, {
      method: "POST",
      body: JSON.stringify({
        name: this.state.name,
        score: this.state.score,
        review: this.state.review,
        recipeId: window.location.pathname.split("/")[2],
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((resJson) => {
        // this.props.addReview(resJson);
        this.setState({
          name: "",
          score: 0,
          review: "",
        });
        this.loadList();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    console.log("form is working");
    console.log("reviewId:", this.state.recipes);
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <h1>Suggest A Recipe</h1>
          {/* ******************* Name Floating Label ******************************** */}
          <Form.Group className="mb-3" controlId="floatingInput">
            <FloatingLabel controlId="floatingInput" label="Your Name" className="mb-3">
              <Form.Control type="text" placeholder="Your Name" name="name" onChange={this.handleChange} value={this.state.name} />
            </FloatingLabel>
          </Form.Group>
          {/* ******************* Star Rating ******************************** */}
          <StarRating handleChangeRating={this.handleChangeRating} />
          {/* ******************* Comments Floating Label ******************************** */}
          <Form.Group className="mb-3" controlId="floatingTextarea2">
            <FloatingLabel controlId="floatingTextarea2" label="Recipe Desciption">
              <Form.Control as="textarea" name="review" onChange={this.handleChange} placeholder="Leave a comment here" style={{ height: "100px" }} />
            </FloatingLabel>
          </Form.Group>
          {/* ******************* Submit Button ******************************** */}
          <Button variant="primary" type="submit">
            Post Recipe
          </Button>
          {/* <input type='text' id='name' onChange={this.handleChange} value={this.state.name} placeholder='Name'/>
                <input type='number' id='score' onChange={this.handleChange} value={this.state.score} placeholder='Score'/>
                <input type='text' id='review' onChange={this.handleChange} value={this.state.review} placeholder='Review'/>
                <input type='submit' value='Post Review'/> */}
        </form>

        <Reviews list={this.state.reviews} />
      </>
    );
  }
}

export default ReviewForm;
