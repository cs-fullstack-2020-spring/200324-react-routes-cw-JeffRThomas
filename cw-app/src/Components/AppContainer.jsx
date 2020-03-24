import React, { Component } from 'react';
import { Fragment } from 'react';
import { Router } from 'react-router-dom';
import StarWarsCharacters from './StarWarsCharacters';
import AddCharacter from './AddCharacter';

class AppContainer extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <Fragment>
                {/* Component Roll Call */}
                {/* AppContainer is present */}
                <h1>React Routes CW</h1>
                <StarWarsCharacters />
                <AddCharacter />
            </Fragment>
        )
    };
};

export default AppContainer;