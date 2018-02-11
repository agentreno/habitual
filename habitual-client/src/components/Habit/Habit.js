import React from 'react';
import './Habit.css'

const Habit = ({ name, description, frequency, progress }) => (
  <div className="Habit">
    <h3>{name}</h3>
    <p>DESCRIPTION: {description}</p>
    <p>FREQ: {frequency}</p>
    <p>PROG: {progress}</p>
  </div>
)

export default Habit;
