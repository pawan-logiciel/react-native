import React, {Component} from 'react'
import {Platform, StyleSheet, Text, View} from 'react-native'
import {createStackNavigator, createAppContainer} from 'react-navigation'

import  StudentScreen from './screens/StudentScreen'
import  HomeScreen from './screens/HomeScreen'
import  AboutScreen from './screens/AboutScreen'

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppStackNavigator = createStackNavigator(
   {
      Student: StudentScreen,
      Home: HomeScreen,
      About: AboutScreen
    },
   {
    initialRouteName: 'About',
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerBackTitle: 'Go back to  main'
      },
    }
)

const AppContainer = createAppContainer(AppStackNavigator);
