/**
 *
 * Home screen container
 *
 */
import React from 'react';
import { connect } from "react-redux";
import {
    Text,
    View,
    ScrollView,
    Button,
    TextInput
} from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { submitWeatherForm } from "./Action";

const validate = values => {
    const errors = {};
    if (!values.city) {
        errors.city = 'Required'
    } else if (values.city.length < 4) {
        errors.city = 'Must be 4 characters or more'
    }
    return errors
};

const warn = values => {
    const warnings = {}
    if (values.city === 'Chernobyl') {
        warnings.city = 'Radiation warning'
    }
    return warnings
};

const MyTextInput = ({input, label, ...inputProps,
                     meta: { touched, error, warning }}) => {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput
                {...inputProps}
                onChangeText={input.onChange}
                onBlur={input.onBlur}
                onFocus={input.onFocus}
                value={input.value}/>

            {touched &&
                ((error) &&
                    <Text>Error: {error}</Text>
                ) ||
                ((warning) &&
                    <Text>Warning: {warning}</Text>
                )
            }
        </View>
    )
};


let WeatherSearchForm = ({handleSubmit}) => {
    return (
        <ScrollView keyboardShouldPersistTaps={'handled'}>
            <Field id="city" name={'city'} component={MyTextInput} type="input" label="City"/>
            <Button onPress={handleSubmit} title="Get Weather"/>
        </ScrollView>
    )
};

WeatherSearchForm = reduxForm({
    form: 'weather',
    onSubmit: submitWeatherForm,
    validate, warn
})(WeatherSearchForm);

export const Weather = ({weather}) => {
  return (
      <View>
          <WeatherSearchForm/>
          <Text>{weather.city}</Text>
          <Text>{weather.region}</Text>
      </View>
  )
};

const mapStateToProps = (state) => ({
    "weather": state.weather
});

const mapDispatchToProps = {
    // "onSubmitRequestWeather": getWeather,
    // "onEditWeatherInput": editWeatherInput
};

export default connect(mapStateToProps, mapDispatchToProps)(Weather);

