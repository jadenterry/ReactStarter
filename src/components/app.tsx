import * as React from 'react';
import {ApplicationState} from '../state';
import {connect} from 'react-redux';
import {increment, decrement} from '../actions/appActions';

interface Properties {
  counter?: number;
  onIncrement?: (val: number) => void;
  onDecrement?: (val: number) => void;
}

class App extends React.Component<Properties, {}> {
  constructor(props: Properties) {
    super(props);
  }
  render() {
    return (
      <div>
        <button onClick={() => this.props.onIncrement(this.props.counter)}>
          Increment
        </button>
        <button onClick={() => this.props.onDecrement(this.props.counter)}>
          Decrement
        </button>
        {this.props.counter && <div>{this.props.counter}</div>}
      </div>
    );
  }
}

const mapStateToProps = (state: ApplicationState, ownProps: Properties) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = (dispatch: Function, ownProps: Properties) => {
  return {
    onIncrement: (val: number) => {
      dispatch(increment(val));
    },
    onDecrement: (val: number) => {
      dispatch(decrement(val));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
