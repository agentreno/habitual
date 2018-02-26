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

  xit('should create an action to fetch habits', () => {
    const expectedAction = {
      type: actions.FETCH_HABITS_REQUEST
    }

    expect(actions.fetchHabits()).toEqual(expectedAction)
  })

  it('should create an action to receive habits', () => {
    const data = {
      habits: [
        {
          "id": "1234",
          "name": "test",
          "description": "test",
          "frequency": 1,
          "progress": 0
        }
      ]
    }

    const expectedAction = {
      type: actions.FETCH_HABITS_SUCCESS,
      habits: [
        {
          "id": "1234",
          "name": "test",
          "description": "test",
          "frequency": 1,
          "progress": 0
        }
      ]
    }

    expect(actions.receiveHabits(data)).toEqual(expectedAction)
  })
})
