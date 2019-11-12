import {ActionType} from 'typesafe-actions';
import {DECREMENT, INCREMENT, testActions} from './testActions';
import {Reducer} from 'redux';

export type TestActions = ActionType<typeof testActions>;

export type TestState = {
  value: number
};

const initialState = {
  value: 0
} as TestState;

export const testReducer: Reducer<TestState, TestActions> = (
  state: TestState = initialState,
  action: TestActions
) => {
  switch (action.type) {
    case INCREMENT: {
      return {
        value: state.value + 1
      }
    }
    case DECREMENT: {
      return {
        value: state.value - 1
      }
    }
    default: {
      return state
    }
  }
};

