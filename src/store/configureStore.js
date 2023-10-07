import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from 'redux-thunk'
import jobReducer from '../reducers/jobReducer'
const configureStore = () => {
    const store = createStore(combineReducers({
        jobs: jobReducer
    }), applyMiddleware(thunk))
    return store
}

export default configureStore