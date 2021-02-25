import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import Animal from './Animal/Animal';
import { useState } from 'react';


const App = props => {

   const [personsState, setPersonsState] =  useState({
      persons: [
        { name: 'Fabricio', age: 43},
        { name: 'Juca', age: 68},
        { name: 'Carla', age: 16}
    ]});

    const changeNameHandler = () =>{
      setPersonsState({persons: [
        { name: 'Maicon', age: 33},
        { name: 'Eloisa', age: 21},
        { name: 'Bianca', age: 26}
      ]})
   };

    return(
      <div className="App">
        <h1 className="title-components">Two components</h1>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}></Person>
        <Animal breed="poodle" age='3'></Animal>
        <button className="btn" onClick={changeNameHandler}>Change Name</button>
      </div> 
    )
  
};
  


export default App;
