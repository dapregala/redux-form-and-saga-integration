import {
    all,
    call,
    put,
    take,
    takeEvery
} from 'redux-saga/effects';
import WebService from '../../util/WebService';
import { SubmissionError } from 'redux-form';
import { putWeather, submitWeatherForm } from "./Action";

function* handleSubmitWeatherFormSaga(action){

    try {
        const weather = yield call(WebService.getWeather, action.payload.city);
        yield put(submitWeatherForm.success());
        yield put(putWeather(weather))

    } catch (e) {
        const formError = new SubmissionError({
            city: 'This city is not found', // specific field error
            _error: 'Login failed, please check your credentials and try again', // global form error
        });
        yield put(submitWeatherForm.failure(formError));
    }
}

export default function* () {
    yield all([
        takeEvery(submitWeatherForm.REQUEST, handleSubmitWeatherFormSaga)
    ]);
};