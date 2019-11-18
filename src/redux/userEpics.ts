import { ActionsObservable, StateObservable } from 'redux-observable';
import { switchMap, map, catchError, filter, withLatestFrom } from 'rxjs/operators';
import { from } from 'rxjs/internal/observable/from';
import { of } from 'rxjs/internal/observable/of';
import { isOfType } from 'typesafe-actions';
import {client} from '../api/Axios';
import {User} from '../screens/AxiosDemo';
import {FETCH_USER, userActions} from './userActions';
import {UserActions} from './userReducer';
import {AppState} from './configureStore';
import {AxiosError} from 'axios';

const fetchUserEpic = (
  action$: ActionsObservable<UserActions>,
  // state$: StateObservable<AppState>
) => action$.pipe(
  filter(isOfType(FETCH_USER)),
  // withLatestFrom(state$),
  switchMap(() => {
    return from(getUser()).pipe(
      map(user => userActions.fetchUserSuccess(user.name)),
      catchError((error: AxiosError) => of(userActions.fetchUserFailed(error.message)))
    );
  })
);

export const userEpics = [
  fetchUserEpic
];

const getUser = async () => {
  const response = await client.get<User>('users/simplezhli');
  return response.data;
};
