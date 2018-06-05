import React, { Component } from 'react';
import {
  Button,
  Text, TextInput,
  View
} from 'react-native';

export default class AppWeather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      forecast: {
        main: '_',
        description: '_',
        temp: 0
      }
    };
  }

  getWeather= () => {
      let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + this.state.city + '&appid=2beac84272da792210075286b80b12e5&&units=metric';
      + this.state.city +
      '&appid=2beac84272da792210075286b80b12e5&units=metric';
      fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          forecast: {
            main: responseJson.weather[0].main,
            description: responseJson.weather[0].description,
            temp: responseJson.main.temp
          }
        });
      }
    );
  }


  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#7f8c8d' }}>

        <View style={{ backgroundColor: 'purple', height: 24 }} />
        <View style={{ backgroundColor: '#673AB7' }}>
           <Text style={{ padding: 10, fontSize: 20, color: 'white', textAlign: 'center' }}>
            App weather
          </Text>
         </View>

        <View style={{ margin: 20, padding: 10, backgroundColor: '#95a5a6' }}>
            <TextInput
              style={{ height: 40 }}
              placeholder="Username"
              onChangeText={(city) => this.setState({ city })}

            />
            <Button
              onPress={() =>
              this.getWeather()
              }
              title="result"
              color="#1abc9c"
              accessibilityLabel="Result"
            />
       </View>

        <View style={{ margin: 20, backgroundColor: '#7f8c8d' }}>
          <Text style={{ padding: 10, fontSize: 20 }}>
              City= {this.state.city}{'\n'}
              Main= {this.state.forecast.main}{'\n'}
              Temp= {this.state.forecast.temp}{'\n'}
              Description= {this.state.forecast.description}


          </Text>
         </View>
   </View>
    );
  }
}
