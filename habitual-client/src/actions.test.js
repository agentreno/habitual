import * as constants from './constants'
import * as actions from './actions'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'

const exampleResponse = {
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


describe('actions', () => {
  it('should create an action to increase habit progress', () => {
    const id = '1234'
    const expectedAction = {
      type: actions.INCREASE_PROGRESS,
      id
    }
    expect(actions.increaseProgress(id)).toEqual(expectedAction)
  })

  it('should create an action to receive habits', () => {
    const data = JSON.parse(JSON.stringify(exampleResponse))
    const expectedAction = {
      type: actions.FETCH_HABITS_SUCCESS,
      habits: JSON.parse(JSON.stringify(exampleResponse)).habits
    }

    expect(actions.receiveHabits(data)).toEqual(expectedAction)
  })
})

describe('async actions', () => {
  const middlewares = [thunk]
  const mockStore = configureMockStore(middlewares)

  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })

  it('creates FETCH_HABITS_SUCCESS when fetching habits is done', () => {
    fetchMock.getOnce(constants.API_URL, {
      body: JSON.parse(JSON.stringify(exampleResponse)),
      headers: {'content-type': 'application/json'}
    })

    const expectedActions = [
      { type: actions.FETCH_HABITS_REQUEST },
      { type: actions.FETCH_HABITS_SUCCESS, habits: JSON.parse(JSON.stringify(exampleResponse)).habits }
    ]
    const store = mockStore({ habits: [] })

    return store.dispatch(actions.fetchHabits()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
