import React from 'react';
import '../Animal/Animal.css';

const animal = (props) =>{
    return (
        <div className="container">
            <h1>Animal Component</h1>
            <p className='animal-paragraph'>Breed: {props.breed}</p>
            <p className='animal-paragraph'>Age: {props.age}</p>
        </div>
    )
}

export default animal;