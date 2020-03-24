import React, { Component } from 'react';
import { Fragment } from 'react';

class AddCharacter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: "",
            BirthYear: "mm/dd/yyyy",
            Gender: ""
        };
    };

    // Seperate Handlers For Each Input Field
    nameHandler = (event) => {
        this.setState({ Name: event.target.value })
    };

    birthHandler = (event) => {
        this.setState({ BirthYear: event.target.value })
    };

    genderHandler = (event) => {
        this.setState({ Gender: event.target.value })
    };

    gotNewCharacter = (Character) => {
        // Hold Submitted Form Data In Component State
        Character.preventDefault();
        console.log('Button clicked');
        console.log(this.state)
    };

    render() {
        return (
            <Fragment>
                {/* Component Roll Call */}
                {/* AddCharacter is present */}
                <form>
                    <fieldset>
                        <legend>Enter A New Character</legend>
                        <div>
                            <label htmlFor="nameField">Name: </label>
                            <input type="text" id="nameField" value={this.state.Name} placeholder="Enter a name" onChange={this.nameHandler}></input>
                        </div>

                        <div>
                            <label htmlFor="birthField">Birth Year: </label>
                            <input type="date" id="birthField" value={this.state.BirthYear} placeholder="MM/DD/YYYY" onChange={this.birthHandler}></input>
                        </div>

                        <div>
                            <label htmlFor="genderField">Gender: </label>
                            <input id="genderField" value={this.state.Gender} placeholder="Male of Female?" onChange={this.genderHandler}></input>
                        </div>

                        <button onClick={this.gotNewCharacter}>Submit New Character</button>
                    </fieldset>
                </form>
            </Fragment>
        )
    };
};

export default AddCharacter;