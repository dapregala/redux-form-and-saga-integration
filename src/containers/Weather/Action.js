import { createAction } from 'redux-actions';
import { createFormAction } from 'redux-form-saga';

export const getWeather = createAction("GET_WEATHER");
export const putWeather = createAction("PUT_WEATHER");
export const submitWeatherForm = createFormAction('SUBMIT_WEATHER_FORM');