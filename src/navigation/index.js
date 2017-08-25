/**
 *
 * Main navigation settings
 *
 */
import React from 'react';
import { TabNavigator } from 'react-navigation';
import {
    Image,
    StyleSheet
} from 'react-native';
import Weather from '../containers/Weather';
import Profile from '../containers/Profile';
import Explore from '../containers/Explore';
import HomeIcon from '../assets/home.png';
import WeatherIcon from '../assets/weather.png';
import ProfileIcon from '../assets/profile.png';

const styles = StyleSheet.create({
    tabIcons: {
        width: 26,
        height: 26
    }
});

const tabConfig = {
    explore: {
        screen: Explore,
        navigationOptions: {
            tabBarLabel: "Explore",
            tabBarIcon: <Image
                source={HomeIcon}
                style={[styles.tabIcons]}
            />
        }
    }, weather: {
        screen: Weather,
        navigationOptions: {
            tabBarLabel: "Weather",
            tabBarIcon: <Image
                source={WeatherIcon}
                style={[styles.tabIcons]}
            />
        }
    }, profile: {
        screen: Profile,
        navigationOptions: {
            tabBarLabel: "Profile",
            tabBarIcon: <Image
                source={ProfileIcon}
                style={[styles.tabIcons]}
            />
        }
    }
};

const tabBarOptions = {
    tabBarOptions: {
        inactiveBackgroundColor: '#EEEEEE',
        activeBackgroundColor: '#E0E0E0',
        activeTintColor: '#000000'
    }, animationEnabled: true
};

export default TabNavigator(tabConfig, tabBarOptions)