import React, { Component } from 'react'
import ReviewForm from '../components/ReviewForm';
import RestaurantCard from '../components/RestaurantCard';
import NavbarPley from '../components/NavbarPley';
import App from '../App';

class ShowPage extends NavbarPley {
    render() { 
        return (
            <div>
                <h1>Show Page</h1>
                <RestaurantCard recipes={this.state.recipe}/>
                <ReviewForm addReview={this.addReview} />
            </div>
        );
    }
}
 
export default ShowPage;