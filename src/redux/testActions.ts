
// Action
import {action} from 'typesafe-actions';

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export const testActions = {
  increment: () => action(INCREMENT),
  decrement: () => action(DECREMENT)
};
