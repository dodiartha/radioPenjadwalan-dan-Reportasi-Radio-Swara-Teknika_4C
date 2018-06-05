import React, { Component } from 'react';
import { Alert, Button, Text, View, Image, StyleSheet, TextInput, ActivityIndicator, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'; // Version can be specified in package.json

import HomeScreen from './HomeScreen'; //memanggil file HomeScreen
import DetailsScreen from './DetailsScreen';
import DataScreen from './DataScreen'; //memanggil file DataScreen
//import FlatList from './FlatList';
import BaruScreen from './BaruScreen'; //memanggil file DataScreen
import ReportaseScreen from './ReportaseScreen'; //memanggil file DataScreen
import DetailReportase from './DetailReportase';
import LoginScreen from './LoginScreen';

export default class MainApp extends React.Component {
    static navigationOptions = {
    header: null
  };
  render() {
    return (
      <Screen /> //memanggil TabNavigator Screen
    );
  }
}

const HomeStack = StackNavigator({
  //Login: { screen: LoginScreen }, //memanggil class HomeScreen yang ada di file HomeScreen 
  Home: { screen: HomeScreen }, //memanggil class HomeScreen yang ada di file HomeScreen 
  
});

const DataStack = StackNavigator({
  Data: { screen: DataScreen }, //memanggil class DataScreen yang ada di file DataScreen
  Details: { screen: DetailsScreen },
  //Flat: { screen: FlatList },
});
const BaruStack = StackNavigator({
  Baru: { screen: BaruScreen }, //memanggil class DataScreen yang ada di file DataScreen
  //Details: { screen: DetailsScreen },
  //Flat: { screen: FlatList },
});
const ReportaseStack = StackNavigator({
  Reportase: { screen: ReportaseScreen }, //memanggil class DataScreen yang ada di file DataScreen
  Detail: { screen: DetailReportase },
  //Flat: { screen: FlatList },
});

const Screen =  TabNavigator(
  {
    Tambah: { screen: HomeStack }, //memanggil stack navigator HomeStack
    Data: { screen: DataStack }, //memanggil stack navigator DataStack
    Maps: { screen: BaruStack }, //memanggil stack navigator DataStack
    Streaming: { screen: ReportaseStack }, //memanggil stack navigator DataStack
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Tambah') {
          iconName = `ios-add-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Data') {
          iconName = `ios-people${focused ? '' : '-outline'}`;
        } else if (routeName === 'Maps') {
          iconName = `ios-map${focused ? '' : '-outline'}`;
        } else if (routeName === 'Streaming') {
          iconName = `md-star${focused ? '' : '-outline'}`;
        }
        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Icon name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: 'blue',
      inactiveTintColor: 'gray',
    },
    animationEnabled: false,
    swipeEnabled: true,
  }
);
