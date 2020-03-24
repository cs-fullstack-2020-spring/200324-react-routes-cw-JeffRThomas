import React, { Component } from 'react';
import { Fragment } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import StarWarsCharacters from './StarWarsCharacters';
import AddCharacter from './AddCharacter';

class AppContainer extends Component {
    render() {
        return (
            <Fragment>
                {/* Component Roll Call */}
                {/* AppContainer is present */}
                <h1>React Routes CW</h1>
                <Router>
                    <div>
                        <Link to="/">Home</Link>
                    </div>

                    <div>
                        <Link to="/StarWarsCharacters">StarWarsCharacters</Link>
                    </div>

                    <div>
                        <Link to="/AddCharacter">AddCharacter</Link>
                    </div>

                    <route path="./StarWarsCharacters"><StarWarsCharacters /></route>
                    <route path="./AddCharacter"><AddCharacter /></route>
                </Router>
            </Fragment>
        )
    };
};

export default AppContainer;