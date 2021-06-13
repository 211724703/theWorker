import { createStore, combineReducers } from 'redux'
import user from './user'


const reducer = combineReducers({ user})
const store = createStore(reducer)
window.store = store
export default store