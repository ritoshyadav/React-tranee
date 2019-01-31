import React, { Component } from 'react';
import './App.css';
import Persons from '../component/Persons/Persons';
// import Radium from 'radium';
import Cockpit from '../component/Cockpit/Cockpit';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';

class App extends Component {
constructor(props){
  super(props);
  console.log('[App.js] Inside Constructor',props);
  this.state = {
    persons: [
      { id: 'dvds1', name: 'Ritosh', age: "28" },
      { id: 'sdsd3', name: 'Paritosh', age: 26 },
      { id: 'sdvds2', name: 'Manoj', age: 50 }
    ],
    otherState: 'some other value',
    showPersons: false,
    toggleClicked:0
  };
}

componentWillMount(){
  console.log('[App.js] Inside componentWillMount()');
}
componentDidMount(){
  console.log('[App.js] Inside componentDidMount()');
}
 
shouldComponentUpdate(nextProps, nextState){
  console.log('[App Persons.js] Inside shouldcomponentUpdate()');
  return true;
}

componentWillUpdate(nextProps,nextState){
  console.log('[App Persons.js] Inside componentWillUpdate',nextProps,nextState);
}

componentDidUpdate(){
  console.log('[App Persons.js] Inside componentDidUpdate'); 
}

  switchNamehandler = (newName) => {
    // console.log('was clicked!');
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Anil', age: 26 },
        { name: 'Dashi', age: 50 }
      ]
    })
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  //   this.setState({
  //     persons: [
  //       { name: 'naveen', age: 28 },
  //       { name: event.target.value, age: 26 },
  //       { name: 'Dashi', age: 50 }
  //     ]
  //   })
  // }

  togglePersonHandler = () => {
    console.log(this.showPersons);
    const doesShow = this.showPersons;
    console.log("doess", doesShow);
    this.setState((prevState,props)=>{
      return {
         showPersons: !doesShow,
    toggleClicked:prevState.toggleClicked+1 
  }
});

  };

  deletePersonHandler = (personIndex) => {
    // const persons= this.state.persons;
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  };

  render() {

    console.log('[App.js] Inside render()');
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />     
    }

    
    return (
      <Aux>
        <Cockpit 
        apptitle={this.props.title}
        showPersons={this.state.showPersons}
        persons={this.state.persons}
        clicked={this.togglePersonHandler}/>
        {persons}
        </Aux>
    );
  }
}

export default withClass(App,"App");
