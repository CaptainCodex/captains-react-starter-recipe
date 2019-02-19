import { combineEpics } from 'redux-observable';

import { default as hello } from '../features/hello/epics';

export default combineEpics(...hello);
