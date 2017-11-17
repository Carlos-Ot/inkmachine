import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
} from 'react-native';
import { StackNavigator } from 'react-navigation'; 

import HomeScreen from './src/components/views/Home';
import DetailScreen from './src/components/views/Details';
import InkLevelDetails from './src/components/views/InkLevelDetails';

const AppContent = StackNavigator({
  Home: {
    screen: HomeScreen,
  },

  Details: {
    screen: DetailScreen,
    navigationOptions: {
      headerTitle: 'Últimos Atendimentos',
    },
  },

  InkDetails: {
    screen: InkLevelDetails,
    navigationOptions: {
      headerTitle: 'Níveis de Tinta'
    },
  },
})

const MyStatusBar = ({ backgroundColor, ...props }) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);


const App = () => (
    <View style={styles.container}>
        <MyStatusBar backgroundColor="#001d2d" barStyle="light-content" />
        <AppContent />
      </View>
);


const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  appBar: {
    backgroundColor: '#FFFFFF',
    height: APPBAR_HEIGHT,
    paddingTop: 5,
    paddingBottom: 5,
  },
  content: {
    flex: 1,
    backgroundColor: '#33373B',
  },
});
  

AppRegistry.registerComponent('InkMachine', () => App);

