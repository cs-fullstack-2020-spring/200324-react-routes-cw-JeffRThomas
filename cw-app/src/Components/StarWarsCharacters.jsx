import React, { Component } from 'react';
import { Fragment } from 'react';

class StarWarsCharacters extends Component {
    constructor(props) {
        super(props);
    };

    componentDidMount() {
        this.getSomeStuff();
    };

    getSomeStuff = async () => {
        // Obtain data from external data source (API)
        let SomeStuff = await fetch('https://swapi.co/api/people/');
        let StarWarsStuff = await SomeStuff.json();
        // Verify data fetch was successful
        console.log(StarWarsStuff);
    };

    render() {
        return (
            <Fragment>
                {/* Component Roll Call */}
                {/* StarWarsCharacters is present */}
            </Fragment>
        )
    };
};

export default StarWarsCharacters;