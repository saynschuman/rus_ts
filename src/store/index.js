import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers'

export default function initStore() {
	const store = createStore(rootReducer, composeWithDevTools())
	return store
}