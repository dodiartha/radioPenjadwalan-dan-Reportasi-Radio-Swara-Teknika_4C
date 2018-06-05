import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';

import HomeScreen from './HomeScreen';
import JadwalScreen from './JadwalScreen';

export default class MainApp extends React.Component{
  render(){
    return (
      <Screen />
      );
  }
}

const TabHome = StackNavigator({
  Home : {screen : HomeScreen},
  Detail: {screen : DetailScreen},
});

const TabJadwal = StackNavigator({
  Jadwal : {screen : JadwalScreen},
  Detail: {screen : DetailScreen},
});

const Screen = TabNavigator({
  Home : { screen : TabHome },
  Jadwal : { screen : TabJadwal },

},
{

navigationOptions: ({ navigation }) => ({
  tabBarIcon: ({ focused, tintColor }) => {
    const { routeName } = navigation.state;
    let iconName;
    if (routeName === 'Home'){
      iconName = `ios-home${focused ? '' : '-outline'}`
    }else if( routeName === 'Jadwal' ) {
       iconName = `ios-people${focused ? '' : '-outline'}`
    }

    return < Ionicons name={iconName} size={25} color={tintColor} />
  },
}), 
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'Bottom',
  tabBarOptions: {
      activeTintColor: 'blue',
      inactiveTintColor: 'gray',
  },
  animationEnabled: false,
  swipeEnabled: false,
}
);