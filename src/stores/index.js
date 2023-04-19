import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import userReducer from './reducers/userReducer'
const allReducers = combineReducers({
  userReducer,
})

const store = createStore(allReducers, applyMiddleware(thunk))

export default store