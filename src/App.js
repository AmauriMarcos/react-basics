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
        { name: 'Carla', age: 16}]
    });

    const [message, newMessage] = useState("Dont't worry, you get there! Just keep going no matter what.");

    const [gamesState, newGameState] = useState({
      games: [
                {name: 'The Last of Us II', quantity: 13},
                {name: 'God of Us', quantity: 6},
                {name: 'GTA V', quantity: 18}
             ]
         })

    const [carsState, newCarsState] = useState({
       cars: [
          {model: 'Corsa D'},
          {year: 2009},
          {color: 'Black'}
       ]
    });

    const changeNameHandler = (newName) =>{
      setPersonsState({persons: [
        { name: 'Maicon', age: 33},
        { name: 'Eloisa', age: 21},
        { name: 'Bianca', age: 26},       
        ]});

      newMessage('Heyyyy');
      
      newCarsState({
        cars: [
          {model: newName},
          {year: 2009},
          {color: 'Black'}
       ]
      })

      newGameState({
        games: [
          {name: newName, quantity: 2},
          {name: 'God of Us', quantity: 6},
          {name: 'GTA V', quantity: 18}
       ]
      })
   };

   const changeNameInput = (event) =>{
    setPersonsState({persons: [
      { name: event.target.value , age: 33},
      { name: 'Eloisa', age: 21},
      { name: 'Bianca', age: 26},       
      ]});
   }

    return(
      <div className="App">
        <h1 className="title-components">Two components</h1>

        <Person 
          model={carsState.cars[0].model} 
          message={message} 
          changeName={changeNameInput}
          name={personsState.persons[0].name} 
          age={personsState.persons[0].age}>  
        </Person>

        <Animal
          gameName={gamesState.games[0].name}
          gameQtd={gamesState.games[0].quantity}
          breed="poodle" 
          age='3'
          click={changeNameHandler.bind(this, 'Dragon Ball GT')}>
        </Animal>

        <button className="btn" onClick={ () => changeNameHandler('OPALA')}>Change Name</button>
      </div> 
    ) 
};
  
export default App;
