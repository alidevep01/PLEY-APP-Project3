import React, { Component } from 'react'

class RestaurantCard extends Component {
    render() { 
        if(this.props.recipes.results == null) {
            <h1>null</h1>
        }else{
        return (
            <div>
                <h1>Restaurant Card</h1>
                {/* <img src={this.props.recipes.results}/> */}
                {this.props.recipes.results.map((results) => {
                    console.log(results.id)
                    console.log(results)
                    
                    return (
                    <div>
                      <a href={results.id}><img src={results.image} alt='image'/></a>
                      <a href={results.id}><h2>{results.title}</h2></a>
                    </div>
                    )
                    
                })}
                {console.log(this.props.recipes.results[0].id)}
                {/* {this.props.recipes.results.image.map( (data) => {
                    console.log(results)
                    return <img src='https://spoonacular.com/recipeImages/715769-312x231.jpg' alt=''/>
                })} */}
                
            </div>
        );
    }
    }
}
 
export default RestaurantCard;