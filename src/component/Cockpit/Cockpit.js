import React from 'react';
import './Cockpit.css';
import Aux from '../../hoc/Aux';

const cockpit =(props)=>{

    let classes = [];
    if (props.persons.length <= 2) {
      classes.push('Cockpit-red'); // classes= ['red']
    }

    if (props.persons.length <= 1) {
      classes.push('bold'); // classes= ['red','bold']
    }

    return (
        <Aux>
        <h1>{props.apptitle}</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <p className="bold">hello Ritosh yadav</p>
        <p className="Cockpit-red">hello Ritosh yadav</p>
        {/* <p className={classes}>This is really working!</p> */}
        {/* <button onClick={this.switchNamehandler}>Switch Name</button> */}
        {/* <button onClick={this.switchNamehandler.bind(this,'Naveen')}>Switch Name</button> */}
        {/* <button
          style={style}
          onClick={() => this.switchNamehandler('Naveen yadav')}>Switch Name</button>
    
        <Person name='Ritosh' age='28' /> */}
        <button
          className="Cockpit-button"
          onClick={props.clicked}>Toggle Persons Name</button>
          </Aux>
    );
};

export default cockpit;