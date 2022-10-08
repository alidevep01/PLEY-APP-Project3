import React, { useState } from "react";
import "../App.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function EachReview(props, handleDelete) {
  const [reviews, getReviews] = useState("");
  return (
    <div className="reviewCard">
      <Card border="secondary">
        <Card.Header className="reviewHeader">
          {props.review.name}
          <span className="reviewbtn">
            <Button variant="warning" onClick={handleDelete}>
              🖊
            </Button>
            <Button variant="danger">X</Button>
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