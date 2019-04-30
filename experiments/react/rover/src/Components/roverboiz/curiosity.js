import React from 'react';

export default class Curiosity extends React.Component {
    constructor(props){ 
    super(props)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            roverName : e.target.innerText
        })
        console.log(e.target.innerText)

    }
        
        fetchBoiz = () => {
        const URL = `https://mars-photos.herokuapp.com/api/v1/rovers/curiosity/photos?earth_date=${this.state.date}`
        fetch(URL) 
        .then( response => response.json())
        .then( results => console.log(results))
    }

        render (){
            return (
                <div>
                    <h3>explore death within the cosmos</h3>
                </div>
            )
        }
}

