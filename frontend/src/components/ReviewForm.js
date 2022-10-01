import React from 'react'
import css from '../App.css'

class ReviewForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            score: 0,
            review: ''
        }
    }

    handleChange = (event) => {
        this.setState({
        [event.target.id]: event.target.value,
        })
      }

      handleSubmit = (event) => {
        event.preventDefault()
    
        fetch(`${process.env.REACT_APP_BACKEND_URL}` + '/pley/:id' , {
            method: 'POST',
            body: JSON.stringify({
                name: this.state.name,
                score: this.state.score,
                review: this.state.review
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then (res => res.json())
        .then (resJson => {
            this.props.addReview(resJson)
            this.setState({
                name: '',
                score: 0,
                review: ''
            })
        })
      }

       render() { 
        console.log('form is working')
        return (
            
            <form onSubmit={this.handleSubmit}>
                <input type='text' id='name' onChange={this.handleChange} value={this.state.name} placeholder='Name'/>
                <input type='number' id='score' onChange={this.handleChange} value={this.state.score} placeholder='Score'/>
                <input type='text' id='review' onChange={this.handleChange} value={this.state.review} placeholder='Review'/>
                <input type='submit' value='Post Review'/>
            </form>
           
        );
    }
}
 
export default ReviewForm;
