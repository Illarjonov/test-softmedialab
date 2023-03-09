import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'

const reducer = combineReducers({
  form: formReducer,
})

const composeEnhancers = composeWithDevTools({})
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const store = createStore(reducer, composeEnhancers(applyMiddleware()))

export default store
