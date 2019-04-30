import React from 'react';

export default class Spirit extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            roverName : e.target.innerText
        })
        console.log(e.target.innerText)

    }

    fetchBoiz = () => {
        const URL = `https://mars-photos.herokuapp.com/api/v1/rovers/spirit/photos?earth_date=${this.state.date}`
        fetch(URL) 
        .then( response => response.json())
        .then( results => console.log(results))
    }
        
        render (){
            return (
                <div className='rover'>
                  <div>
                <h3>your ghost will haunt the starz</h3>
                <form onSubmit = 
            </div>
                
                </div>
        )
    }
    
};