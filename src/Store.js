import {createStore, applyMiddleware, combineReducers} from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from 'remote-redux-devtools';

import weatherReducer from './containers/Weather/Reducer';
import { reducer as formReducer } from 'redux-form';
import rootSaga from "./Saga";

console.log(weatherReducer);

const sagaMiddleware = createSagaMiddleware();

const middleware = composeWithDevTools(applyMiddleware(
    sagaMiddleware
));

const reducers = combineReducers({
    "weather": weatherReducer,
    "form": formReducer
});

const store = createStore(reducers, middleware);

sagaMiddleware.run(rootSaga);

export default store;