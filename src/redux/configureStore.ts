import { Middleware, StoreEnhancer, applyMiddleware, createStore, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import {rootEpic, rootReducer} from './root';

export type AppState = ReturnType<typeof rootReducer>;

const configureStore = (initialState?: AppState) => {
  const epicMiddleware = createEpicMiddleware();
  const middlewares: Middleware[] = [epicMiddleware];

  const middlewareEnhancer: StoreEnhancer = applyMiddleware(...middlewares);
  const store = createStore(rootReducer, initialState, compose(middlewareEnhancer));

  epicMiddleware.run(rootEpic);

  return store;
};

export default configureStore;
