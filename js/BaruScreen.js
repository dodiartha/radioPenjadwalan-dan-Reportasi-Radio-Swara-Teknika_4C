import React, { Component } from 'react';
import { RefreshControl, Button, Text, View, Image, StyleSheet, TextInput, ActivityIndicator, TouchableOpacity, FlatList, List, ListItem } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'; // Version can be specified in package.json
import openMap from 'react-native-open-maps';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
class LogoTitle extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems:'center', justifyContent: 'center', flexDirection: 'row' }}>
        <Image
          source={require('./assets/swara.png')}
          style={{width: 30, height: 30, tintColor: '#2196F3'  }}
        />
        <Text style={ styles.TextHeader }>107.7 FM</Text>
      </View>
    );
  }
}
export default class App extends Component {
 static navigationOptions = {
    headerTitle: <LogoTitle />,
  };

  state = {
    region: {
      latitude: -8.149407,
      longitude: 115.216667,
      latitudeDelta: 0.8922,
      longitudeDelta: 0.8421,
    },
    markers : [
      {
        key:1,
        latlng: {
          latitude: -8.114928,
          longitude: 115.098425
        },
        title:"SMK N 3 Singaraja",
        description:"SMK N 3 Singaraja"
      },
      
   ]
  };

   _goToYosemite() {
    openMap({ latitude: 115.098854, longitude: -8.115023 });
  }

  render() {
    return (
      <View style={styles.contMain}>
        <View style={styles.contMaps}>
              <MapView
                style={styles.map}
                region={this.state.region}
              >
              {this.state.markers.map(mark => (
              <Marker
                  key = {mark.key}
                  coordinate={mark.latlng}
                  title={mark.title}
                  description={mark.subtitle}
                />
              ))}
              </MapView>
        </View>
        <Button
        color={'#bdc3c7'}
        onPress={this._goToYosemite}
        title="Click To Open Maps" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  contMain: {
      flex : 1
  },
  contHeader: {
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  contMaps : {
    flex : 10
  },
  textHeader: {
    fontSize: 20,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contFooter: {
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  textFooter: {
    fontSize: 16,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }

});
