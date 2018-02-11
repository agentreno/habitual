import React, { Component } from 'react';
import Habit from './components/Habit/Habit';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Habit
          name="Running"
          description="Go for a run"
          frequency="Twice a week"
          progress="0%"
        />
      </div>
    );
  }
}

export default App;
