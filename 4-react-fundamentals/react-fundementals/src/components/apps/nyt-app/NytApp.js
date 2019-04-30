import React, { Component } from 'react'; // importing React library
import NytResults from './NytResults' // importing results from API NYTResults.js
const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const key = 'ZBiCK3eXoGelXR10A4yvuB0BLBvS6L1J';
export default class NytApp extends Component { // exports the component, calls class NytApp which is extended (inheriting) from overall React Component library
  constructor(props) { // sets the initial state of the component based on below information
    super(props) // allows this component to receive props and inherit props from parent class
    this.state = { // defines the initial state set, based on info between here.
      search: '',
      startDate: '',
      endDate: '',
      pageNumber: 0,
      results: []
    }; //
  }
  handleChange = (event) => { // deals with userinput so that state is updated based on what is typed in fields
    this.setState({ // updates state according to where this function is called
      [event.target.name]: event.target.value, // target.name tells it which field to update and does so based on what is at target.value(the value of what the user types in fields)
    });
  }
  handleSubmit = (event) => { // deals with info submittal, so that the info is populated and changes the state of the component
    this.setState({pageNumber: 0}) // resets page number for each search so that our results start at page 0
    this.fetchResults() // calls the fetch function 
    event.preventDefault() // prevents the default action of submit button from refreshing the webpage
  }
  fetchResults = () => { // overall function for getting API results
    let url = `${baseURL}?api-key=${key}&page=${this.state.pageNumber}&q=${this.state.search}` // defines the base URL, plus API Key, pagenumber, and query info depending on the value of input fields
    url = this.state.startDate ? url + `&begin_date=${this.state.startDate}` : url // ternary that changes url is startdate field has a value, else keeps url the same
    url = this.state.endDate ? url + `&end_date=${this.state.endDate}` : url // ternary that changes url is enddate field has a value, else keeps url the same
    fetch(url) // grabs API results
      .then(
        (response) => response.json() // turns results into a JSON, promise
      ).then((data) => {
        this.setState({ results: data.response.docs }) // promise that updates the state of the component to populate the results of the json, based on user query
      })
  }
  changePageNumber = (e, direction) => { // function for pagination, passes parameters, e(event) and direction
    e.preventDefault() // prevents the default action of a button from reloading webpage
    if (direction === 'down') { // if prev. button is called (which passes direction value to 'down', do the following)
      if (this.state.pageNumber > 0) { // if the current states pagenumber is greater than 0, which prevents from going into negative page numbers
        let newPageNumber = this.state.pageNumber - 1 // deincrement page number
        this.setState({ pageNumber: newPageNumber }) // update state with new page number of results
        this.fetchResults(); // calls fetch API results again according to current pagenumber
      }
    }
    if (direction === 'up') {  // if next. button is called (which passes direction value to 'up', do the following)
      let newPageNumber = this.state.pageNumber + 1 // increments page number
      this.setState({ pageNumber: newPageNumber }) // updates state of component to new incremented page number
      this.fetchResults(); // calls fetch API results according to new current pagenumber
    }
  }
  render() { // function that converts JSX to HTML on the webpage
    return (
      <div className="main"> 
        <div className="mainDiv">
          <form onSubmit={e => this.handleSubmit(e)}> {/* calling handleSubmit function with e(event) parameter*/}
            <span>Enter a SINGLE search term (required): </span>
            <input type="text" name="search" onChange={this.handleChange} required /><br /> {/* name tells handleChange function which input to look at when updating state, calls function with this.handleChange*/}
            <span>Enter a start date: </span>
            <input type="date" name="startDate" pattern="[0-9]{8}" onChange={this.handleChange} /><br /> {/* startDate tells handleChange function which input to look at when updating state, calls function with this.handleChange*/}
            <span>Enter an end date: </span>
            <input type="date" name="endDate" pattern="[0-9]{8}" onChange={this.handleChange} /><br /> {/* endDate tells handleChange function which input to look at when updating state, calls function with this.handleChange*/}
            <button className="submit">Submit search</button> 
          </form>
          {
            this.state.results.length > 0 ? <NytResults results={this.state.results} changePage={this.changePageNumber} /> : <div></div> // a ternary saying if there are results populated from the NytResults component, display them here and receives prop changePage which calls changePageNumber function if pagination is needed based on results
          }
        </div>
      </div>
    );
  }
}