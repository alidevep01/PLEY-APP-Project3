import React from "react";
import css from "../App.css";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import StarRating from "./StarRating";

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      score: 0,
      review: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    fetch(`${process.env.REACT_APP_BACKEND_URL}` + "/pley/:id", {
      method: "POST",
      body: JSON.stringify({
        name: this.state.name,
        score: this.state.score,
        review: this.state.review,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((resJson) => {
        this.props.addReview(resJson);
        this.setState({
          name: "",
          score: 0,
          review: "",
        });
      });
  };

  render() {
    console.log("form is working");
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Your Review</h1>
        {/* ******************* Name Floating Label ******************************** */}
        <Form.Group className="mb-3" controlId="floatingInput">
          <FloatingLabel controlId="floatingInput" label="Your Name" className="mb-3">
            <Form.Control type="text" placeholder="Your Name" onChange={this.handleChange} value={this.state.name} />
          </FloatingLabel>
        </Form.Group>
        {/* ******************* Star Rating ******************************** */}
        <StarRating />
        {/* ******************* Comments Floating Label ******************************** */}
        <Form.Group className="mb-3" controlId="floatingTextarea2">
          <FloatingLabel controlId="floatingTextarea2" label="Comments">
            <Form.Control as="textarea" placeholder="Leave a comment here" style={{ height: "100px" }} />
          </FloatingLabel>
        </Form.Group>
        {/* ******************* Submit Button ******************************** */}
        <Button variant="primary" type="submit">
          Post Review
        </Button>
        {/* <input type='text' id='name' onChange={this.handleChange} value={this.state.name} placeholder='Name'/>
                <input type='number' id='score' onChange={this.handleChange} value={this.state.score} placeholder='Score'/>
                <input type='text' id='review' onChange={this.handleChange} value={this.state.review} placeholder='Review'/>
                <input type='submit' value='Post Review'/> */}
      </form>
    );
  }
}

export default ReviewForm;
