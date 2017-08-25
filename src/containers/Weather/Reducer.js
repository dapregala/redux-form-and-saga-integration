import { handleActions } from 'redux-actions';
import {getWeather, putWeather} from "./Action";

const initialState = {
    "city": "Paris",
    "region": "Ile-de-France",
    "fetching:": false
};

export default handleActions({
    [getWeather]: (state, action) => ({
        ...state,
        "fetching": true
    }),
    [putWeather]: (state, action) => ({
        "fetching": false,
        "city": action.payload.location.name,
        "region": action.payload.location.region
    })
}, initialState)