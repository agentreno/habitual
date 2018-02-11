import React from 'react';
import Habit from '../Habit/Habit';
import './HabitList.css'

const HabitList = ({ habits }) => (
  <div className="HabitList">
    {habits.map((habit, index) => (
      <Habit
        key={index}
        {...habit}
      />
    ))}
  </div>
)

export default HabitList;
