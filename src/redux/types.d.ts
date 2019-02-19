import { StateType } from 'typesafe-actions';
import rootReducer from './root-reducer';
import { Action as HelloAction } from '../features/hello/reducer';

declare module 'Types' {
  export type RootState = StateType<typeof rootReducer>;
  export type RootAction = HelloAction;
}
