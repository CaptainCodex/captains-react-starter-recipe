import Types from 'Types';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import { HelloWorld } from '../containers/HelloWorld';
import { getHello, getWorld } from '../features/hello/actions';
import { getCapitalizedGreeting } from '../features/hello/selectors';

const mapStateToProps = (state: Types.RootState) => ({
  greeting: getCapitalizedGreeting(state.hello),
  salutation: state.hello.world.salutation
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      getHello,
      getWorld: getWorld.request
    },
    dispatch
  );

export const HelloWorldConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(HelloWorld);
