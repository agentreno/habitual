import { INCREASE_PROGRESS, FETCH_HABITS_SUCCESS } from './actions'
import { v4 } from 'node-uuid'

export const initialState = {
  habits: [
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
  ],
  isFetching: false
}

// A single root reducer for now
function habits(state = initialState, action) {
  switch(action.type) {

    case INCREASE_PROGRESS:
      return Object.assign({}, state, {
        habits: state.habits.map((habit) =>
          {
            return habit.id === action.id ?
              Object.assign({}, habit, { progress: habit.progress + 1 }) :
              habit
          }
        )
      })

    case FETCH_HABITS_SUCCESS:
      // Intentionally replace local state
      return {
        habits: action.habits,
        isFetching: false
      }

    default:
      return state

  }
}

// Only one reducer for now, but there will be more
// const habitReducer = combineReducers({ habits })
const habitReducer = habits

export default habitReducer
