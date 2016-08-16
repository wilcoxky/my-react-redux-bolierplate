import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import { browserHistory } from 'react-router';
import { routerMiddleWare } from 'react-router-redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/';

const logger = createLogger();
const router = routerMiddleWare(browserHistory);

const createStoreWithMiddles = applyMiddleware(/* More Here*/ thunk, router, logger)(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddles(rootReducer, initialState);
}
