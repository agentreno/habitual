import * as constants from './constants'
import * as actions from './actions'
import { getHabits } from './api'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

jest.mock('./api')

const exampleResponse = [
  {
    "id": "1234",
    "name": "test",
    "description": "test",
    "frequency": 1,
    "progress": 0
  }
]


describe('actions', () => {
  xit('should create an action to increase habit progress', () => {
    const id = '1234'
    const expectedAction = {
      type: actions.INCREASE_PROGRESS,
      id
    }
    expect(actions.increaseProgress(id)).toEqual(expectedAction)
  })

  xit('should create an action to receive habits', () => {
    const data = JSON.parse(JSON.stringify(exampleResponse))
    const expectedAction = {
      type: actions.FETCH_HABITS_SUCCESS,
      habits: JSON.parse(JSON.stringify(exampleResponse))
    }

    expect(actions.receiveHabits(data)).toEqual(expectedAction)
  })
})

describe('async actions', () => {
  const middlewares = [thunk]
  const mockStore = configureMockStore(middlewares)

  xit('creates FETCH_HABITS_SUCCESS when fetching habits is done', () => {
    getHabits.mockImplementation(Promise.resolve(exampleResponse))
    const expectedActions = [
      { type: actions.FETCH_HABITS_REQUEST },
      { type: actions.FETCH_HABITS_SUCCESS, habits: JSON.parse(JSON.stringify(exampleResponse)) }
    ]
    const store = mockStore({ habits: [] })

    return store.dispatch(actions.fetchHabits()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
