import React, { Component } from 'react';
import { Fragment } from 'react';

class AddCharacter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: "SamSausageHead",
            BirthYear: 0,
            Gender: ""
        };
    };

    nameHandler=(event)=>{
        this.setState({Name:event.target.value})
    };

    gotNewCharacter = (Character) => {
        Character.preventDefault();
        console.log('Button clicked');
        console.log(this.state.Name)
    };

    render() {
        return (
            <Fragment>
                {/* Component Roll Call */}
                {/* AddCharacter is present */}
                <form>
                    <fieldset>
                        <legend>Enter A New Character</legend>
                        <label htmlFor="nameField">Name: </label>
                        <input id="nameField" value={this.state.Name} placeholder="Enter a name" onChange={this.nameHandler}></input>
                        <button onClick={this.gotNewCharacter}>Submit Character</button>
                    </fieldset>
                </form>
            </Fragment>
        )
    };
};

export default AddCharacter;