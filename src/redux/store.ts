import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import logger from 'redux-logger';

import Types from 'Types';
import { composeEnhancers } from './utils';
import rootReducer from './root-reducer';
import rootEpic from './root-epic';
import services from '../services';

export const epicMiddleware = createEpicMiddleware<
  Types.RootAction,
  Types.RootAction,
  Types.RootState
>({
  dependencies: services
});

function configureStore(initialState?: object) {
  const middlewares = [epicMiddleware, logger];

  if (process.env.NODE_ENV !== 'development') {
    middlewares.pop();
  }

  const enhancer = composeEnhancers(applyMiddleware(...middlewares));

  return createStore(rootReducer, initialState, enhancer);
}

const store = configureStore();

epicMiddleware.run(rootEpic);

export default store;
