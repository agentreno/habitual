import { combineReducers } from 'redux'
import { INCREASE_PROGRESS } from './actions'

const initialState = {
  habits: []
}

// A single root reducer for now
function habits(state = initialState, action) {
  switch(action.type) {

    case INCREASE_PROGRESS:
      return Object.assign({}, state, {
        habits: state.habits.map((habit) =>
          {
            habit.id === action.id ?
              Object.assign({}, habit, { progress: habit.progress + 1 } :
              habit
          }
        )
      })

    default:
      return state

  }
}

// Only one reducer for now, but there will be more
const habitReducer = combineReducers({ habits })

export default habitReducer
