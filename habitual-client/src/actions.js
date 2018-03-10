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

export const INCREASE_PROGRESS = 'INCREASE_PROGRESS'
export function increaseProgress(id) {
  return { type: INCREASE_PROGRESS, id }
}
