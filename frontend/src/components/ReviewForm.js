import React, { Component } from 'react'
import css from '../App.css'

class ReviewForm extends Component {
    constructor(props){
        super(props)
    }
       render() { 
        console.log('form is working')
        return (
           
                <form className='form review-form'>
                    <input type='text' id='name' name='name' placeholder='Name'></input>
                    <input type='text' id='reviewComment' name='reviewComment' placeholder='Comment'></input>
                    <input type='submit' value='Submit'></input>
                </form>
           
        );
    }
}
 
export default ReviewForm;