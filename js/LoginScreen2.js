import React, { Component } from 'react';
import { StyleSheet, TextInput, View, Alert, Button, Image, Text, TouchableOpacity} from 'react-native';
import { StackNavigator } from 'react-navigation';

class LogoTitle extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems:'center', justifyContent: 'center', flexDirection: 'row' }}>
        <Text style={ styles.TextHeader }> www.radioswarateknika.com</Text>
      </View>
    );
  }
}
class LoginActivity extends Component {
 
    static navigationOptions =
     {
       headerTitle: <LogoTitle />,
     };
   
  constructor()
    {
        super();
        this.state = {
          email: '',
          password: '',
          ActivityIndicator_Loading: false,
        }
    }
    //fungsi mengirim data ke database
    UserLoginFunction = () =>{
 this.setState({ ActivityIndicator_Loading : true }, () =>
        {
fetch('http://dodiartha.000webhostapp.com/api/login.php',
{
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email : this.state.email,
    password : this.state.password,
  })

}).then((response) => response.json())
      .then((responseJson) => {
        this.setState({ ActivityIndicator_Loading : false });
        // If server response message same as Data Matched
       if(responseJson === 'Login Berhasil')
        {
            //Then open Profile activity and send user email to profile activity.
            this.props.navigation.navigate('Utama');
        }
        else{
          Alert.alert(responseJson);
        }

      }).catch((error) => {
        console.error(error);
        this.setState({ ActivityIndicator_Loading : false});
      });

    });
  } 
    render() {
      return (
   
        <View style={styles.MainContainer}>
        <View style={{ alignItems:'center', justifyContent: 'center' }}>
        <Image  source={require('./assets/logo21.png')} style={styles.icon2}/>
        </View>
          <Text style= {styles.TextComponentStyle}>Form Login</Text>
          <TextInput
            placeholder="Masukkan Email"
            onChangeText={email => this.setState({email})}
            underlineColorAndroid='transparent'
            style={styles.TextInputStyleClass}
          />
   
          <TextInput
            placeholder="Masukan Password"
            onChangeText={password => this.setState({password})}
            underlineColorAndroid='transparent'
            style={styles.TextInputStyleClass}
            secureTextEntry={true}
          />
          <Text> </Text>
          <Button title="LOGIN" onPress={this.UserLoginFunction} color="#2196F3" />
          <Text> </Text>
          <Text>---------------------------------------------------OR-----------------------------------------------</Text>
          <Text> </Text>
          <Button title="DAFTAR" onPress={() => this.props.navigation.navigate('Daftar')} color="#2196F3" />
        </View>
              
      );
    }
  }
   
  export default LoginActivity

const styles = StyleSheet.create({
 
  MainContainer :{
    justifyContent: 'center',
    flex:1,
    margin: 10,
  },
   
  TextInputStyleClass: {
    textAlign: 'center',
    marginBottom: 7,
    height: 40,
    borderWidth: 1,
    borderColor: '#2196F3',
    borderRadius: 5 ,
  },
   
  TextComponentStyle: {
    fontSize: 20,
    color: "#000",
    textAlign: 'center', 
    marginBottom: 15
  },

  icon2:{
      height:100,
      width:170,
    }
  
  });