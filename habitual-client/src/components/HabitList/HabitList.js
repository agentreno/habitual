import React from 'react';
import HabitCard from '../HabitCard/HabitCard';
import './HabitList.css'

const HabitList = ({ habits }) => (
  <div className="HabitList">
    {habits.map((habit, index) => (
      <HabitCard
        key={habit.id}
        {...habit}
      />
    ))}
  </div>
)

export default HabitList
