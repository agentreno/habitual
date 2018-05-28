import React from 'react'
import HabitListContainer from './containers/HabitListContainer/HabitListContainer'
import CreateHabitContainer from './containers/CreateHabitContainer/CreateHabitContainer'

import './App.css'

const App = () => (
  <div className="App">
    <CreateHabitContainer />
    <HabitListContainer />
  </div>
)

export default App
