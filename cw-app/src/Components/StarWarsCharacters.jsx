import React, { Component } from 'react';
import { Fragment } from 'react';

class StarWarsCharacters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            StarWarsCharacters: [] // variables start with a lower case letter
        };
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
        console.log(StarWarsStuff.results); // nice job testing!
        this.setState({ StarWarsCharacters: StarWarsStuff.results })
        console.log(this.state);
    };

    render() {
        // you should be displaying three properties of the object in map
        return (
            <Fragment>
                {/* Component Roll Call */}
                {/* StarWarsCharacters is present */}
                {/* Starting to build Map Method But Ran Out Of Time */}
                {this.state.StarWarsCharacters.map((character)=>{
                    return(
                        <div>
                            <p>Name: {character.name}</p>
                        </div>
                    )
                })}
            </Fragment>
        )
    };
};

export default StarWarsCharacters;