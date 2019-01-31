import React, { Component } from 'react';
import './Person.css'
// import Radium from 'radium';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import PropsTypes from 'prop-types';

class Person extends Component {
    constructor(props) {
        super(props);
        console.log('[Person.js] Inside Constructor', props);

    }

    componentWillMount() {
        console.log('[Person.js] Inside componentWillMount()');
    }
    componentDidMount() {
        console.log('[Person.js] Inside componentDidMount()');
        if (this.props.position === 0) {
            this.inputElement.focus();
        }
    }

    render() {
        console.log('[Person.js] Inside Render()');
        return (
            // <div className="Person">
            <Aux>
                <p onClick={this.props.click} >I'm a {this.props.name} and I am {this.props.age} year old! </p>
                <p>{this.props.children}</p>
                <input
                    ref={(inp) => { this.inputElement = inp }}
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name} />
            </Aux>
        )
    }
}


Person.PropsTypes = {
    click: PropsTypes.func,
    name: PropsTypes.string,
    age: PropsTypes.number,
    changed: PropsTypes.func
};
export default withClass(Person, "Person");