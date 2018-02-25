// Action constants
export const FETCH_HABITS_REQUEST = 'FETCH_HABITS_REQUEST'
export const FETCH_HABITS_SUCCESS = 'FETCH_HABITS_SUCCESS'
export const INCREASE_PROGRESS = 'INCREASE_PROGRESS'

// Action creators
export function fetchHabits() {
  return { type: FETCH_HABITS_REQUEST }
}

export function receiveHabits(data) {
  return {
    type: FETCH_HABITS_SUCCESS,
    habits: data.habits
  }
}

export function increaseProgress(id) {
  return { type: INCREASE_PROGRESS, id }
}
