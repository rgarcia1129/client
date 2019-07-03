import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import applicationReducer from './application/reducers';

export default history =>
  combineReducers({
    application: applicationReducer,
    router: connectRouter(history)
  })