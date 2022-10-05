import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../App.css";
import { Link } from "react-router-dom";

class RestaurantCard extends Component {
  render() {
    console.log('cardmap', this.props.recipes.results)
    if (this.props.recipes.results == null) {
      console.log("null");
    } else {
      return (
        <div className="recipeCard">
          <Row xs={1} md={2} lg={3} xl={4} xll={5} className="g-4">
            {this.props.recipes.results.map((results) => {
              console.log(results.id);
              console.log(results);
              return (
                <Col>
                  <Card>
                    {/* <Link to={'/recipe/' + results.id}>
                        <Card.Img variant="top" src={results.image} />
                    </Link> */}
                    <a href={'/recipe/' + results.id}>
                      <Card.Img variant="top" src={results.image} />
                    </a>
                    <Card.Body>
                      <Card.Title style={{ height: "88px" }}>{results.title}</Card.Title>
                      <Card.Text></Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </div>
      );
    }
  }
}

export default RestaurantCard;
