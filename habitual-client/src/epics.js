import { combineEpics } from 'redux-observable';
import { httpEpic } from 'redux-observable-sans'

const options = {
  url: 'http://localhost:8000/api',
  setHeaders: (state$, deps) => ({ Authorization: 'Basic a2FybDp0ZXN0aW5nMTIz' })
}

export default combineEpics(
  httpEpic(options),
)
