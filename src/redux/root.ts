import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import {testReducer} from './testReducer';
import { userEpics } from './userEpics';
import {userReducer} from './userReducer';

export const rootReducer = combineReducers({
  testState: testReducer,
  userState: userReducer
});

export const rootEpic = combineEpics(...userEpics);
