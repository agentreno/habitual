import React, { Component } from 'react';
import HabitList from './components/HabitList/HabitList';
import { v4 } from 'node-uuid'

const habits = [
  {
    id: v4(),
    name: 'Running',
    description: 'Go for a run',
    frequency: 2,
    progress: 0
  },
  {
    id: v4(),
    name: 'Core work',
    description: 'Strengthen core with exercises',
    frequency: 2,
    progress: 0
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
