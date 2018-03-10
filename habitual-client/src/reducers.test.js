import habitReducer, { initialState } from './reducers'
import * as actions from './actions'

describe('habits reducer', () => {
  it('should return the initial state', () => {
    expect(habitReducer(undefined, {})).toEqual(initialState)
  })

  it('should replace habits when habits are received', () => {
    const testInitialState = {
      habits: [
        {
          id: '1234',
          name: 'local',
          description: 'previous local state',
          frequency: 1,
          progress: 0
        },
      ]
    }

    const data = {
      habits: [
        {
          id: '1235',
          name: 'new',
          description: 'new state from server',
          frequency: 1,
          progress: 0
        },
      ]
    }

    const expectedState = {
      habits: [
        {
          id: '1235',
          name: 'new',
          description: 'new state from server',
          frequency: 1,
          progress: 0
        },
      ]
    }

    expect(
      habitReducer(testInitialState, {
        type: actions.FETCH_HABITS_SUCCESS,
        habits: data.habits
      }).habits
    ).toEqual(expectedState.habits)
  })

  it('should update isFetching when habits are received', () => {
    expect(
      habitReducer({ isFetching: true }, {
        type: actions.FETCH_HABITS_SUCCESS,
        habits: []
      }).isFetching
    ).toEqual(false)
  })

  it('should update isFetching when habits are being fetched', () => {
    expect(
      habitReducer({ isFetching: false }, {
        type: actions.FETCH_HABITS_REQUEST,
        habits: []
      }).isFetching
    ).toEqual(true)
  })

})
