import {ApplicationState} from '../state';
import {Action} from '../actions';

export default function appReducer(
  state: ApplicationState = {
    counter: 0,
  },
  action: Action,
) {
  switch (action.type) {
    case 'App/Increment':
      state = {...state, counter: action.value + 1};
      break;
    case 'App/Decrement':
      state = {...state, counter: action.value - 1};
      break;
  }
  return state;
}
