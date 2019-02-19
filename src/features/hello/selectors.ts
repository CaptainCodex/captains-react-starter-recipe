import { createSelector } from 'reselect';
import * as _ from 'lodash';
import { State } from './reducer';

const getGreeting = (state: State) => state.hello.greeting;

export const getCapitalizedGreeting = createSelector(
  [getGreeting],
  greeting => {
    return greeting.toUpperCase();
  }
);
