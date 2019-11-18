import {ActionType} from 'typesafe-actions';
import {Reducer} from 'redux';
import {FETCH_USER, FETCH_USER_FAILED, FETCH_USER_SUCCESS, userActions} from './userActions';

export type UserActions = ActionType<typeof userActions>;

export type UserState = {
  name: string,
  error: string
};

const initialState = {
  name: '',
  error: ''
} as UserState;

export const userReducer: Reducer<UserState, UserActions> = (
  state: UserState = initialState,
  action: UserActions
) => {
  switch (action.type) {
    case FETCH_USER: {
      return initialState
    }
    case FETCH_USER_SUCCESS: {
      return {
        ...state,
        name: action.payload.name,
        error: ''
      }
    }
    case FETCH_USER_FAILED: {
      return {
        ...state,
        name: '',
        error: action.payload.error,
      }
    }
    default: {
      return state
    }
  }
};

