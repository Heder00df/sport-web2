import {applyMiddleware, compose, createStore} from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import promise from 'redux-promise';


export const configureStoreProd = (initialState) => {
  const middlewares = [
    // Adicione ou remova middlewares aqui...

    thunk,
    promise
  ];

  return createStore(rootReducer, initialState, compose(
    applyMiddleware(...middlewares)
  ));
};

/*const configureStoreDev = (initialState) => {
  const middlewares = [
    // Adicione ou remova middlewares aqui...

    // Redux middleware responsável por emitir erros em mutações ilegais do state em/entre dispatches...
    reduxImmutableStateInvariant(),
    thunk,
    promise
  ];

  // Habilitação do Redux Dev Tools...
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(rootReducer, initialState, composeEnhancers(
    applyMiddleware(...middlewares)
  ));
};*/

const configureStore = configureStoreProd;

const Store = configureStore();

export default Store;
