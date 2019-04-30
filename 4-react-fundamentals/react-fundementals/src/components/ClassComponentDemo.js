import React, { Component } from 'react';

import MdThumbUp from 'react-icons/lib/md/thumb-up'
import MdThumbDown from 'react-icons/lib/md/thumb-down'

export default class ClassComponentDemo extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0, negCount: 0 };
    }

    incrementCount = () => {
        console.log("increment called");
        this.setState(
            { count: this.state.count + 1 }
        );
    };

    negCount = () => {
        console.log("increment called");
        this.setState(
            { negCount: this.state.negCount - 1 }
        );
    };


    render() {
        console.log("render called");
        return (
            <div className="main">
                <div className="mainDiv">
                    <ClassComponentNotes />
                    <hr />
                    <h3>Smash that like button!</h3>
                    <button onClick={this.incrementCount}>
                        <MdThumbUp /> {this.state.count}
                    </button>

                    <button onClick={this.negCount}>
                        <MdThumbDown /> {this.state.negCount}
                    </button>

                </div>
            </div>
        );
    }
}

const ClassComponentNotes = function () {
    return (
        <div>
            <h1>Class Components</h1>

            <p>Class components are considered the "React way" of writing components.</p>
            <dl>
                <dt>ES6 JS Classes</dt>
                <dd>Built on these, must understand them</dd>
                <dt>must extend Component </dt>
                <dd>Class components need to extend the React Component.</dd>
                <dt>render()</dt>
                <dd>Class components must always have a render method.</dd>
                <dt>export</dt>
                <dd>Only one class component exported per file.</dd>
            </dl>
        </div>
    );
};
