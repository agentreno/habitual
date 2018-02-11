import habitReducer from './reducers'
import * as actions from './actions'

describe('habits reducer', () => {
  it('should return the initial state', () => {
    const expectedInitialState = {
      habits: []
    }
    expect(habitReducer(undefined, {})).toEqual(expectedInitialState)
  })

  it('should handle INCREASE_PROGRESS', () => {
    const initialState = {
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
      habitReducer(initialState, {
        type: actions.INCREASE_PROGRESS,
        id: '1234'
      })
    ).toEqual(expectedState)
  })

})
