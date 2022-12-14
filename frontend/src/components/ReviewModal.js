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
        this.handleChangeName = this.handleChangeName.bind(this)
        this.handleChangeScore = this.handleChangeScore.bind(this)
        this.handleChangeReview = this.handleChangeReview.bind(this)
        this.state = {
            name: this.props.reviews.name,
            score: this.props.reviews.score,
            review: this.props.reviews.review,
            reviews: this.props.reviews,
            show: this.props.show
        }
    }

    handleChangeRating = (rating) => {
        this.setState({
          score: rating,
        });
    };


    // componentDidMount() {
    //     this.handleUpdate()
    // }

    // handleUpdate = (review) => {
    //     fetch(baseURL + '/pley/' + review, {
    //       method: 'PUT',
    //       body: JSON.stringify({
    //         name: '',
    //         score: '',
    //         review: '',
    //       }),
    //       headers: {
    //         'Content-Type' : 'application/json'
    //       }
    //     })
    //     .then(res => res.json())
    //     .then(resJson => {
    //         console.log('resJson', resJson)
    //         const copyReviews = [...this.props.reviews]
    //         const findIndex = this.props.reviews.findIndex(
    //         (review) => review._id === resJson._id
    //       )
    //     //   if(copyReviews[findIndex]._id = resJson.reviews._id){
    //     //     this.setState({reviews: copyReviews})
    //     //   }
    //     })
    //   }

    handleChangeName(event) {
        console.log('eventname:', event.target.value)
        this.setState({
            name: event.target.value
        })
    }

    handleChangeScore(event) {
        this.setState({
            score: event.target.value
        })
    }

    handleChangeReview(event) {
        this.setState({
            review: event.target.value
        })
    }


    handleUpdate = (id) => {
        // id.prevent.default()
        console.log('update:', id)
        fetch(`${process.env.REACT_APP_BACKEND_URL}/pley/${id._id}`, {
            method: "PUT",
            body: JSON.stringify({
              name: this.state.name,
              score: this.state.score,
              review: this.state.review,
              reviews: this.state.reviews
            }),
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((res) => res.json())
          .then((resJson) => {
            console.log('resJson:', resJson)
            const copyReviews = [...this.state.reviews]
            const findIndex = this.state.reviews.findIndex(
                (review) => review._id === resJson._id
            )
            copyReviews[findIndex]._id = resJson._id
            if(id._id = resJson._id){
                this.setState({ reviews: copyReviews})
            }
          })
          .catch((error) => {
            console.log(error)
          })
    }

    

    render() { 
        if(!this.props.show){
            return null
        }
        return (
            <div>
                {this.props.reviews.map((review) => {
                    console.log('mapId:',review)
                    if(review) {
                        return (
                            <form onSubmit={this.handleUpdate(review)}>
                                <h1>Update Recipe</h1>
                                {/* ******************* Name Floating Label ******************************** */}
                                <Form.Group className="mb-3" controlId="floatingInput">
                                    <FloatingLabel controlId="floatingInput" label={review.name} className="mb-3">
                                    <Form.Control type="text" name="name" onChange={this.handleChangeName} value={this.state.name} />
                                    </FloatingLabel>
                                </Form.Group>
                                {/* ******************* Star Rating ******************************** */}
                                <StarRating handleChangeRating={this.handleChangeRating} />
                                {/* ******************* Comments Floating Label ******************************** */}
                                <Form.Group className="mb-3" controlId="floatingTextarea2">
                                    <FloatingLabel controlId="floatingTextarea2" label="Recipe Desciption">
                                    <Form.Control as="textarea" name="review" onChange={this.handleChangeReview} value={this.state.review} style={{ height: "100px" }} />
                                    </FloatingLabel>
                                </Form.Group>
                                {/* ******************* Submit Button ******************************** */}
                                <Button variant="primary" type="submit">
                                    Post Recipe
                                </Button>
                            </form>
                        )
                    }
                })}

                {console.log('reviewlookup:', this.props.reviews)}
                
            </div>
        );
    }
}
 
export default ReviewModal;