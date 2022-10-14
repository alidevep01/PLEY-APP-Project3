import React, { Component } from 'react'
import css from "../App.css";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import Card from "react-bootstrap/Card";
import StarRating from "./StarRating";
// import ReviewModal from './ReviewModal'
import App from '../App'

const baseURL = `${process.env.REACT_APP_BACKEND_URL}`;


class ReviewFormNew extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            score: 0,
            review: "",
            reviews: [],
            show: this.props.show
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
        fetch(`${process.env.REACT_APP_BACKEND_URL}/pley`, {
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
            console.log('loadlist',this.state.reviews)
          })
          .catch((err) => {
            console.log(err);
          });
      };

    
    handleSubmit = (event) => {
      
        event.preventDefault();
        fetch(`${process.env.REACT_APP_BACKEND_URL}/pley/`, {
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
          console.log('this is URL',`${process.env.REACT_APP_BACKEND_URL}/pley/${window.location.pathname.split("/")[2]}`);
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

                <div className="">
                    {this.props.reviews.length > 0
                        ? this.props.reviews.map((review) => {
                            return ( 
                            <div className="reviewCard">
                                <Card border="secondary">
                                <Card.Header className="reviewHeader">
                                    {review.name}
                                    <span className="reviewbtn">
                                    <Button variant="warning" onClick={() => this.props.showModal()}>
                                        🖊
                                    </Button>
                                    <Button variant="danger" onClick={() => this.props.handleDelete(review._id)}>X</Button>
                                    </span>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Title>{review.score}</Card.Title>
                                    <Card.Text>{review.review}</Card.Text>
                                </Card.Body>
                                </Card>
                                <br />
                            </div>
                          )
                        })
                        : "No Recipes"}
                        {console.log('bottom', this.props.reviews)}
                </div>
            </div>
        );
    }
}
 
export default ReviewFormNew;