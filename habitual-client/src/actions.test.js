import * as actions from './actions'

describe('actions', () => {
  it('should create an action to increase habit progress', () => {
    const id = '1234'
    const expectedAction = {
      type: actions.INCREASE_PROGRESS,
      id
    }
    expect(actions.increaseProgress(id)).toEqual(expectedAction)
  })
})
