import * as React from 'react';
import * as nock from 'nock';
import { mount, configure } from 'enzyme';
import { Provider } from 'react-redux';
import App from '../App';
import reducer, { State } from '../features/hello/reducer';
import * as actions from '../features/hello/actions';
import store from '../redux';
import { defer } from '../../utils';

import * as Adapter from 'enzyme-adapter-react-16';
import { getCapitalizedGreeting } from '../features/hello/selectors';

configure({ adapter: new Adapter() });

const render = () =>
  mount(
    <Provider store={store}>
      <App />
    </Provider>
  );

const getInitialState = (initial?: Partial<State>) =>
  reducer(initial as State, {} as any);

describe('Hello reducer', () => {
  describe('initial state', () => {
    it('should match previously saved snapshot', () => {
      const initialState = getInitialState();

      expect(initialState).toMatchSnapshot();
    });
  });

  describe('after calling getHello', () => {
    it('greeting should not change on error', async () => {
      const originalGreeting = store.getState().hello.hello.greeting;

      nock('http://localhost:8080')
        .get('/hello')
        .replyWithError('Something went wrong.');

      store.dispatch(actions.getHello());

      await defer();

      expect(originalGreeting).toEqual(store.getState().hello.hello.greeting);
    });

    it('greeting should change', async () => {
      const originalGreeting = store.getState().hello.hello.greeting;

      nock('http://localhost:8080')
        .get('/hello')
        .reply(200);

      store.dispatch(actions.getHello());

      await defer();

      expect(originalGreeting).not.toEqual(
        store.getState().hello.hello.greeting
      );
    });
  });

  describe('after calling getWorld', () => {
    it('salutation should change', async () => {
      const originalGreeting = store.getState().hello.hello.greeting;

      nock('http://localhost:8080')
        .get('/world')
        .reply(200);

      store.dispatch(actions.getWorld.request());

      await defer();

      expect(originalGreeting).not.toEqual(
        store.getState().hello.world.salutation
      );
    });

    it('salutation should raise an error', async () => {
      nock('http://localhost:8080')
        .get('/world')
        .replyWithError('Something went wrong.');

      store.dispatch(actions.getWorld.request());

      await defer();

      expect(store.getState().hello.world.salutation).toEqual('Error raised.');
    });
  });

  describe('Hello World page', () => {
    it('greeting should be welcoming', () => {
      const wrapper = render();

      const greeting = wrapper.find('#getHello').text();

      expect(greeting).toContain(
        getCapitalizedGreeting(store.getState().hello)
      );
    });

    it('greeting should change after click', async () => {
      const originalGreeting = getCapitalizedGreeting(store.getState().hello);

      nock('http://localhost:8080')
        .get(`/hello`)
        .reply(200);

      const wrapper = render();

      const clickable = wrapper.find('#getHello');

      clickable.simulate('click');

      await defer();

      wrapper.update();

      const greeting = wrapper.find('#getHello').text();

      expect(greeting).not.toEqual(originalGreeting);
    });

    it('salutation should change after click', async () => {
      const originalSalutation = store.getState().hello.world.salutation;

      nock('http://localhost:8080')
        .get(`/world`)
        .reply(200);

      const wrapper = render();

      const clickable = wrapper.find('#getWorld');

      clickable.simulate('click');

      await defer();

      wrapper.update();

      const greeting = wrapper.find('#getWorld').text();

      expect(greeting).not.toEqual(originalSalutation);
    });
  });
});
