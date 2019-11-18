
// Action
import {action} from 'typesafe-actions';

export const FETCH_USER = 'FETCH_USER';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILED = 'FETCH_USER_FAILED';

export const userActions = {
  fetchUser: () => action(FETCH_USER),
  fetchUserSuccess: (name: string) => action(FETCH_USER_SUCCESS, { name }),
  fetchUserFailed: (error: string) => action(FETCH_USER_FAILED, { error })
};
