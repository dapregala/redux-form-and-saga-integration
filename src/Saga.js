import {
    all,
    spawn
} from "redux-saga/effects";

import weatherSaga from "./containers/Weather/Saga";
import reduxFormSaga from 'redux-form-saga';

export default function* rootSaga() {
    yield all([
        spawn(weatherSaga),
        spawn(reduxFormSaga)
    ]);
}
