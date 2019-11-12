
// Action
import {action} from 'typesafe-actions';

export const INCREMENT = "increment";
export const DECREMENT = "decrement";

export const testActions = {
  increment: () => action(INCREMENT),
  decrement: () => action(DECREMENT)
};
