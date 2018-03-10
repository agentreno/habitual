import axios from 'axios'
import * as constants from './constants'

export function getHabits() {
  return axios.get(constants.API_URL)
    .then(response => response.data)
}
