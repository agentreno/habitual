// Action constants
export const INCREASE_PROGRESS = 'INCREASE_PROGRESS'

// Action creators
export function increaseProgress(id) {
  return { type: INCREASE_PROGRESS, id }
}
