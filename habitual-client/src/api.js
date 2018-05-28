import axios from 'axios'
import * as constants from './constants'

export function getHabits() {
  return axios.get(`${constants.API_URL}/habits/`)
    .then(response => response.data)
}

export function updateHabit(habit) {
  return axios.put(`${constants.API_URL}/habits/${habit.id}/`, habit)
    .then(response => response.data)
}

export function createActivityForHabit(activity, habit) {
  return axios.post(`${constants.API_URL}/habits/${habit.id}/activity/`, activity)
    .then(response => response.data)
}
