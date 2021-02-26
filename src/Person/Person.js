import '../Person/Person.css'
import React from 'react';

const person = (props) => {
    return(
        <div className="container-person">
            <h1>Person Component</h1>
            <p className="person-text">I'm <span>{Math.floor(Math.random() * 100 + 1)}</span> years old.</p>
            <p className="person-text">Name: {props.name} </p>
            <p className="person-text">Age: {props.age} </p>
            <p className="person-text">{props.message}</p>
            <input value={props.name} onChange={props.changeName} placeholder="Insert a new name"></input>
            <p>{props.model}</p>
        </div>
    )   
}

export default person;