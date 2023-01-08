import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import counterReducer from './ducks/counter';
import itemsReducer from './ducks/items';
import { watcherSaga } from "./sagas/rootSaga";



const reducer = combineReducers({
    counter: counterReducer,
    items : itemsReducer,
})

const sageMiddleWare = createSagaMiddleware();

const middleWare = [sageMiddleWare]

const store = createStore(reducer, {}, applyMiddleware(...middleWare));

sageMiddleWare.run(watcherSaga);

export default store;