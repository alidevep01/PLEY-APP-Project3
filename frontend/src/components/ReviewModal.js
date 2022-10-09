import React, { Component } from 'react'
import css from "../App.css";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import Card from "react-bootstrap/Card";
import StarRating from "./StarRating";
import App from '../App';

const baseURL = `${process.env.REACT_APP_BACKEND_URL}`;

class ReviewModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            score: this.props.score,
            review: this.props.review,
            reviews: [],
            show: this.props.show
        }
    }

    handleChangeRating = (rating) => {
        this.setState({
          score: rating,
        });
    };

    handleUpdate = (review) => {
        fetch(baseURL + '/pley/' + review._id, {
          method: 'PUT',
          body: JSON.stringify({
            name: review.target.name,
            score: review.target.score,
            review: review.target.review,
          }),
          headers: {
            'Content-Type' : 'application/json'
          }
        })
        .then(res => res.json())
        .then(resJson => {
            console.log('resJson', resJson)
          const copyReviews = [...this.state.reviews]
          const findIndex = this.state.reviews.findIndex(
            (review) => review._id === resJson._id
          )
          copyReviews[findIndex].editReview = resJson.editReview
          this.setState({reviews: copyReviews})
        })
      }

    // handleUpdate = (review) => {
    //     const id = review._id
    //     if(id){
    //     const putReview = {
    //         name: review.target.value,
    //         score: review.target.value,
    //         review: review.target.review
    //     }
    //     const res =
    //     fetch(baseURL + '/pley/' + review._id, {
    //         method: 'PUT',
    //         headers: {
    //             'Content-Type' : 'application/json'
    //         },
    //         body: JSON.stringify(putReview)
    //     }
    // }

    render() { 
        if(!this.props.show){
            return null
        }
        return (
            <div>
                
                <form onSubmit={this.handleUpdate}>
                    <h1>Update Recipe</h1>
                    {/* ******************* Name Floating Label ******************************** */}
                    <Form.Group className="mb-3" controlId="floatingInput">
                        <FloatingLabel controlId="floatingInput" label="Your Name" className="mb-3">
                        <Form.Control type="text" placeholder={this.props.name} name="name" onChange={this.handleChange} value={this.props.name} />
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
 
export default ReviewModal;