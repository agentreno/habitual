import React from 'react'
import HabitListContainer from './containers/HabitListContainer/HabitListContainer'
import CreateHabitContainer from './containers/CreateHabitContainer/CreateHabitContainer'

import './App.css'

const App = (props) => (
  <div className="App">
    <HabitListContainer {...{props}} />
    <CreateHabitContainer {...{props}} />
  </div>
)

export default App
