import * as api from './api'

// Action creators
export const FETCH_HABITS_REQUEST = 'FETCH_HABITS_REQUEST'
export function fetchHabits() {
  return dispatch => {
    dispatch({ type: FETCH_HABITS_REQUEST })
    return api.getHabits()
      .then(json => dispatch(receiveHabits(json)))
  }
}

export const FETCH_HABITS_SUCCESS = 'FETCH_HABITS_SUCCESS'
export function receiveHabits(data) {
  return {
    type: FETCH_HABITS_SUCCESS,
    habits: data
  }
}

export const UPDATE_HABIT_REQUEST = 'UPDATE_HABIT_REQUEST'
export function updateHabit(habit) {
  return dispatch => {
    dispatch({ type: UPDATE_HABIT_REQUEST, habit })
    return api.updateHabit(habit)
      .then(habit => dispatch(updateHabitSuccess(habit)))
  }
}

export const UPDATE_HABIT_SUCCESS = 'UPDATE_HABIT_SUCCESS'
export function updateHabitSuccess(habit) {
  return {
    type: UPDATE_HABIT_SUCCESS,
    habit
  }
}
