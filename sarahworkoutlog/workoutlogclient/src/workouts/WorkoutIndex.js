import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import WorkoutCreate from './WorkoutCreate';

class WorkoutIndex extends Component {
    constructor(props) {
        super(props)
        this.state = {
            workouts: []
        }
    }

    fetchWorkouts = () => {
        fetch("http://localhost:3000/log", {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then((res) => res.json())
            .then((logData) => {
                return this.setState({ workouts: logData })
            })
    }
    componentDidMount() {
        this.fetchWorkouts()
    }
    render() {
        return (
            <Container>
                <Row>
                    <Col md="3">
                        <WorkoutCreate token={this.props.token} updateWorkoutsArray={this.fetchWorkouts} />
                    </Col>
                    <Col md="9">
                        <h2>Log a workout to see table this will be added in the upcoming modules</h2>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default WorkoutIndex;