import React, { Component } from 'react';
import { Fragment } from 'react';
import StarWarsCharacters from './StarWarsCharacters';

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
            </Fragment>
        )
    };
};

export default AppContainer;