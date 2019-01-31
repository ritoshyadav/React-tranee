import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
    constructor(props) {
        super(props);
        console.log('[Persons.js] Inside Constructor', props);
    }

    componentWillMount() {
        console.log('[Persons.js] Inside componentWillMount()');
    }
    componentDidMount() {
        console.log('[Persons.js] Inside componentDidMount()');
    }
  componentWillReceiveProps(nextProps){
    console.log('[Update Persons.js] Inside componentWillReceiveProps()');
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[Update Persons.js] Inside shouldcomponentUpdate()');
    return nextProps.persons!==this.props.persons;
  }

  componentWillUpdate(nextProps,nextState){
    console.log('[Update Persons.js] Inside componentWillUpdate',nextProps,nextState);
  }

  componentDidUpdate(){
    console.log('[Update Persons.js] Inside componentDidUpdate'); 
  }
    render() {
        console.log('[Persons.js] Inside render()');
        return this.props.persons.map((person, index) => {
            return <Person
                click={() => this.props.clicked(index)}
                name={person.name}
                position={index}
                age={person.age}
                key={person.id}
                changed={(event) => this.props.Changed(event, person.id)} />
        });
    }
}


export default Persons;