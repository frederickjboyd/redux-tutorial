import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import { forbiddenWordsMiddleware } from '../middleware';

// To use Redux Dev Tools with other middlewares
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__ || compose;

// Create the store
const store = createStore(rootReducer, storeEnhancers(applyMiddleware(forbiddenWordsMiddleware)));

export default store;
