import React, { Component } from 'react';
import HabitList from './components/HabitList/HabitList';

const habits = [
  {
    name: 'Running',
    description: 'Go for a run',
    frequency: 'Twice a week',
    progress: '0%'
  },
  {
    name: 'Core work',
    description: 'Strengthen core with exercises',
    frequency: 'Twice a week',
    progress: '0%'
  },
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <HabitList habits={habits} />
      </div>
    );
  }
}

export default App;
