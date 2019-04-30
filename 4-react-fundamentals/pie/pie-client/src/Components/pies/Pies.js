import React from 'react';
import './Pies.css';
import Pie from './pie/Pie';

// tore out testData

class Pies extends React.Component {
    constructor() {
        super();

        this.state = {
            pies : []
        }
    }

	// new
    componentDidMount = () => {
        this.fetchPies();
    }

	// new
    fetchPies = () => {
        let url = 'http://localhost:3005/pies';

        fetch(url)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    pies : data
                })
            })
            .catch(err => console.log(err));
    }


    render() {				// modified
        let pieRows = this.state.pies.map(data => {
            return (
                <Pie pie={data} />
            )
        })

        return (
            <table>
                <thead>
                    <td>Name of Pie</td>
                    <td>Base of Pie</td>
                    <td>Crust</td>
                    <td>Time to Bake</td>
                    <td>Servings</td>
                    <td>Rating</td>
                </thead>
                <tbody>
                    { pieRows }
                </tbody>
            </table>
        )
    }
}

export default Pies;
