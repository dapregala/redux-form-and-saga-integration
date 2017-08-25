
import React from 'react';
import {
    View
} from 'react-native';
import { Provider } from 'react-redux';

import Navigation from './navigation';
import store from "./Store";
import 'babel-polyfill';

export default () => {
    return (
        <Provider store={store}>
            <View style={{"flex": 1, "paddingTop": 25, "backgroundColor": "#F5F5F5"}}>
                <Navigation />
            </View>
        </Provider>

    )
}