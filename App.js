import React, { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './Vistas/Login';
import Profile from './Vistas/Profile';
import WebView from './Vistas/WebView';
import Anotaciones from './Vistas/Anotaciones';
import SearchUser from './Vistas/Anotaciones/SearchUser';
import CreateNewAnnotation from './Vistas/Anotaciones/CreateNewAnnotation';

const AppNavigator = createSwitchNavigator(
  {
    Login: {
      screen: Login
    },
    SearchUser: {
      screen: SearchUser
    },
    Profile: {
      screen: Profile
    },
    WebView: {
      screen: WebView
    },
    CreateNewAnnotation: {
      screen: CreateNewAnnotation
    }
  },
  {
    initialRouteName: 'Login'
  }
);

const RootStack = createStackNavigator(
  {
    Main: AppNavigator,
    MiModal: () => <Text>Lalalal</Text>
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
);

export default createAppContainer(RootStack);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
