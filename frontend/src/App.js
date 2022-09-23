import React, { Component } from 'react'

// setup api baseURL
let baseURL = ''

// if(process.env.NODE_ENV === 'development'){
//   baseURL = 'http://localhost:3000'
// }else{
//   baseURL = 'heroku backend url'
// }

console.log('current base url: ', baseURL)

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      baseURL: "https://api.yelp.com/v3/",
      apikey: `apikey${process.env.REACT_APP_API_KEY}`,
      restaurant: '',
      searchURL: ''
    }
  }

  handleChange = (event) => {
    event.preventDefault()
    console.log(event.target.id)
    console.log(event.target.value)

    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    this.setState({
      searchURL: this.state.baseURL + this.state.apikey //i have to figure out the rest of this url out.
    }, () => {
      fetch(this.state.searchURL)
        .then((response) => response.json())
        .then(json => this.setState({
          restaurant: json,
          name: ''
        }), (err) => console.log(err))
    })
  }

  componenetDidMount() {
    this.getRestaurants()
  }
  
  getRestaurants = (location) => {
    fetch(baseURL + '/businesses/search?categories=restaurants' + `&location=${location}`, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer r2iztoK6oWTGflkpSyaMDeTeTgJeib_xGZpXmc9XCIcIzvmdEbzjtYVvQErYKNS89H6WJ_rbsHgQ7QzZQiZJGHbJE5VFh88r5Z44v1CimVobpiteTXRAYBcNQp4rY3Yx'
      },
    })
    .then((res, error) => {
      if(error){
        return res.json
      }else{
        return []
      }
    })
    .then((data) => {
      console.log('data', data)
      this.setState({restaurants: data.restaurants})
    })
  }

  render() { 
    return (
      <h1>App Page!</h1>
    );
  }
}


// function App() {
//   return (
//     <div className="App">
//       <h1>App Page</h1>
//     </div>
//   );
// }

export default App;
