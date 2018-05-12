import * as React from 'react';
import {ApplicationState} from '../state';
import {connect} from 'react-redux';
import {increment, decrement} from '../actions/appActions';

export interface Properties extends React.Props<App> {
  counter?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

class App extends React.Component<Properties, {}> {
  constructor(props: Properties) {
    super(props);
  }
  render() {
    return (
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <button onClick={() => this.props.onDecrement()}>
          Decrement
        </button>
        <button onClick={() => this.props.onIncrement()}>
          Increment
        </button>
        <div>&nbsp;&nbsp;{this.props.counter}</div>
      </div>
    );
  }
}

const mapStateToProps = (state: ApplicationState, ownProps: Properties) => {
  return {
    counter: state.counter
  } as Properties
};

const mapDispatchToProps = (dispatch: Function, ownProps: Properties) => {
  return {
    onIncrement: () => {
      dispatch(increment());
    },
    onDecrement: () => {
      dispatch(decrement());
    },
  } as Properties
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
