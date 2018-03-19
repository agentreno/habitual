import React from 'react'
import HabitListContainer from './containers/HabitListContainer/HabitListContainer'
import CreateHabit from './components/CreateHabit/CreateHabit'

import './App.css'

const App = () => (
  <div className="App">
    <CreateHabit />
    <HabitListContainer />
  </div>
)

export default App
