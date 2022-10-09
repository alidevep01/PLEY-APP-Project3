import React, { useState } from "react";
import "../App.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Reviews from "./Reviews";
import { handleDeleteReview } from "./Reviews";

function EachReview(props, handleDelete) {
  const [reviews, getReviews] = useState("");
  return (
    <div className="reviewCard">
      <Card border="secondary">
        <Card.Header className="reviewHeader">
          {props.review.name}
          <span className="reviewbtn">
            <Button variant="warning">
              🖊
            </Button>
            <Button variant="danger" >X</Button>
            {/* onClick={handleDeleteReview(props.id)} */}
          </span>
        </Card.Header>
        <Card.Body>
          <Card.Title>{props.review.score}</Card.Title>
          <Card.Text>{props.review.review}</Card.Text>
        </Card.Body>
      </Card>
      <br />
    </div>
  );
}

export default EachReview;