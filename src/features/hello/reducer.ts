import { combineReducers } from 'redux';
import { ActionType } from 'typesafe-actions';

import * as actions from './actions';
import * as constants from './constants';
import { Hello, World } from './models';

export type Action = ActionType<typeof actions>;

export type State = {
  readonly hello: Hello;
  readonly world: World;
};

const initialHello = Hello.create({ greeting: 'Welcome to the app.' });
const initialSalutation = World.create({ salutation: 'Bonjour.' });

export default combineReducers<State, Action>({
  hello: (state = initialHello, action) => {
    switch (action.type) {
      case constants.GET_HELLO_RESPONSE:
        if (state.greeting === 'Welcome to the app.') {
          return new Hello('Change anything you need!');
        } else if (state.greeting === 'Change anything you need!') {
          return new Hello('And happy coding.');
        }

      default:
        return state;
    }
  },
  world: (state = initialSalutation, action) => {
    switch (action.type) {
      case constants.GET_WORLD_RESPONSE:
        return new World('Aloha!');
      case constants.GET_WORLD_ERROR:
        return new World('Error raised.');

      default:
        return state;
    }
  }
});
