import React, { Component } from 'react';
import { Fragment } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import StarWarsCharacters from './StarWarsCharacters';
import AddCharacter from './AddCharacter';

class AppContainer extends Component {
    render() {
        // route starts with a capital R - your imported it correctly but referenced it incorrectly
        // also route and path should match - no dot necessary
        return (
            <Fragment>
                {/* Component Roll Call */}
                {/* AppContainer is present */}
                <h1>React Routes CW</h1>
                <Router>
                    <Link to="/">AppContainer</Link>
                    <br />
                    <Link to="/StarWarsCharacters">StarWarsCharacters</Link>
                    <route path="./StarWarsCharacters"><StarWarsCharacters /></route>
                </Router>
                <AddCharacter/>
            </Fragment>
        )
    };
};

export default AppContainer;