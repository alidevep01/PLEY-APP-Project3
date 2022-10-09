import React, { Component } from 'react'
import css from "../App.css";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import StarRating from "./StarRating";

class ReviewFormNew extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            score: 0,
            review: "",
            reviews: [],
        }
    }

    componentDidMount() {
        this.loadList();
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

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
          }),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((resJson) => {
            this.props.handleAddReview(resJson)
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
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>NEW Suggest A Recipe</h1>
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
                </form>
            </div>
        );
    }
}
 
export default ReviewFormNew;