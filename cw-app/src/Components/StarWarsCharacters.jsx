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
        let SomeStuff = await fetch('https://swapi.co/api/people/');
        let StarWarsStuff = await SomeStuff.json();
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