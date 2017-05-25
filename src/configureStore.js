import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'
import { loadState, saveState } from './utils/localStorage'
import throttle from 'lodash/throttle'

const configureStore = () => {
  const persistedState = loadState()
  const enhancer = compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )

  const store = createStore(
    reducer,
    persistedState,
    enhancer,
  )

  store.subscribe(throttle(() => {
    saveState({ ...store })
  }, 1000))

  return store
}

export default configureStore
