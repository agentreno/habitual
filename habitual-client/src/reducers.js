import * as actions from './actions'

export const initialState = {
  habits: [],
  isFetching: false
}

// A single root reducer for now
function habits(state = initialState, action) {
  switch(action.type) {

    case actions.UPDATE_HABIT_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })

    case actions.UPDATE_HABIT_SUCCESS:
      return Object.assign({}, state, {
        habits: state.habits.map((habit) =>
          {
            return habit.id === action.habit.id ?
              action.habit : habit
          }
        ),
        isFetching: false
      })

    case actions.FETCH_HABITS_SUCCESS:
      // Intentionally replace local state
      return {
        habits: action.habits,
        isFetching: false
      }

    case actions.FETCH_HABITS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })

    default:
      return state
  }
}

// Only one reducer for now, but there will be more
// const habitReducer = combineReducers({ habits })
const habitReducer = habits

export default habitReducer
