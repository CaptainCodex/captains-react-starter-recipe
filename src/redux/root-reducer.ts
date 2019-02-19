import { combineReducers } from 'redux';

import hello from '../features/hello/reducer';

const rootReducer = combineReducers({
  hello
});

export default rootReducer;
