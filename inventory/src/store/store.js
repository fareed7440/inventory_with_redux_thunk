import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import mainReducer from './reducer/rootReducer'
const logger = createLogger();
const store = createStore(mainReducer,
    applyMiddleware(thunk, logger)
);

export default store