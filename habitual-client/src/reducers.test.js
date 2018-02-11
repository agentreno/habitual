import habitReducer from './reducers'

describe('habits reducer', () => {
  it('should return the initial state', () => {
    const expectedInitialState = {
      habits: []
    }
    expect(habitReducer(undefined, {})).toEqual(expectedInitialState)
  })
})
