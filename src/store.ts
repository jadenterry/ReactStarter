import {ApplicationState} from './state';
import {combineReducers, createStore, applyMiddleware, Middleware} from 'redux';
import app from './reducers/appReducer';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import { Store } from 'react-redux';

const middleware: Middleware[] = [thunk];
const logger = createLogger();
middleware.push(logger);

let state: ApplicationState;
// const reducer = combineReducers({app});
const store = createStore(app, state, applyMiddleware(...middleware));

export default store as Store<ApplicationState>;
