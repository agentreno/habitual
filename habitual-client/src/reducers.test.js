import habitReducer, { initialState } from './reducers'
import * as actions from './actions'

describe('habits reducer', () => {
  it('should return the initial state', () => {
    expect(habitReducer(undefined, {})).toEqual(initialState)
  })

  it('should handle INCREASE_PROGRESS', () => {
    const testInitialState = {
      habits: [
        {
          id: '1234',
          name: 'Test',
          description: 'test',
          frequency: 1,
          progress: 0
        },
      ]
    }

    const expectedState = {
      habits: [
        {
          id: '1234',
          name: 'Test',
          description: 'test',
          frequency: 1,
          progress: 1
        },
      ]
    }

    expect(
      habitReducer(testInitialState, {
        type: actions.INCREASE_PROGRESS,
        id: '1234'
      })
    ).toEqual(expectedState)
  })

})
