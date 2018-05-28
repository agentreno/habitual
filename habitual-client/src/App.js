import React from 'react'
import HabitListContainer from './containers/HabitListContainer/HabitListContainer'
import CreateHabitContainer from './containers/CreateHabitContainer/CreateHabitContainer'

import './App.css'

const App = () => (
  <div className="App">
    <HabitListContainer />
    <CreateHabitContainer />
  </div>
)

export default App
