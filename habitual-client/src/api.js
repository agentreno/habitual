import axios from 'axios'
import * as constants from './constants'

export function getHabits() {
  return axios.get(constants.API_URL)
    .then(response => response.data)
}

export function updateHabit(habit) {
  return axios.put(`${constants.API_URL}${habit.id}/`, habit)
    .then(response => response.data)
}
