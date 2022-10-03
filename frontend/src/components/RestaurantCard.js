import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class RestaurantCard extends Component {
  render() {
    if (this.props.recipes.results == null) {
      console.log("null");
    } else {
      return (
        <div>
          <Row xs={1} md={2} lg={3} xl={4} xll={5} className="g-4">
            {this.props.recipes.results.map((results) => {
              console.log(results.id);
              console.log(results);
              return (
                <Col>
                  <Card>
                    <a href={results.id}>
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
