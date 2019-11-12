import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import {testReducer} from './testReducer';

export const rootReducer = combineReducers({
  testState: testReducer
});

export const rootEpic = combineEpics();
