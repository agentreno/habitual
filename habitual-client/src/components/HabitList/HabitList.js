import React from 'react';
import HabitCard from '../HabitCard/HabitCard';
import './HabitList.css'

const HabitList = ({ habits, onProgress }) => (
  <div className="HabitList">
    {habits.map((habit, index) => (
      <HabitCard
        key={habit.id}
        {...habit}
        onClick={() => onProgress(habit.id)}
      />
    ))}
  </div>
)

export default HabitList
