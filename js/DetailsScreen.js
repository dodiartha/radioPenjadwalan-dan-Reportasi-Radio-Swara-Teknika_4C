import React, { Component } from 'react';
import { RefreshControl, Button, Text, View, Image, StyleSheet, TextInput, ActivityIndicator, ScrollView, Alert,  TouchableOpacity, FlatList, List, ListItem, KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'; // Version can be specified in package.json
import ImagePicker from 'react-native-image-picker';

//Data Screen

class LogoTitle extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems:'center', justifyContent: 'center', flexDirection: 'row' }}>
        <Image
          source={require('./assets/swara.png')}
          style={{width: 30, height: 30, tintColor: '#2196F3'  }}
        />
        <Text style={ styles.TextHeader }> www.radioswarateknika.com</Text>
      </View>
    );
  }
}
export default class DetailsScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <LogoTitle />,
  };

constructor(props) {
    super(props);
    this.state = {
      tanggal: '',
      nama: '',
      ajang: '',
      materi: '',
      job: '',
      reportase: '',
      srcImg: '',
      image: '',
      ActivityIndicator_Loading: false,
    };
}

  componentDidMount()  {
    this.setState({
        tanggal : this.props.navigation.state.params.tanggal,
        nama: this.props.navigation.state.params.nama,
        ajang: this.props.navigation.state.params.ajang,
        materi: this.props.navigation.state.params.materi,
        job: this.props.navigation.state.params.job,
        reportase: this.props.navigation.state.params.reportase,
      })

     }

  choosePicture = () => {
      console.log("upload")
      var ImagePicker = require('react-native-image-picker');
      var options = {
          title: 'Pilih Gambar',
          storageOptions: {
            skipBackup: true,
            path: 'images'
          }
      };

      ImagePicker.showImagePicker(options, (response) => {
          console.log('Response = ', response);
          if (response.didCancel) {
            console.log('User cancelled image picker');
          }
          else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          }
          else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
          }
          else {
            let source = { uri: response.uri };
            console.log(source);
            console.log(response.fileName);
            this.setState({
              srcImg: source,
              uri: response.uri,
              fileName: response.fileName,
              image: response.fileName,
            });
          }
      });
    };

    uploadPicture = () => {
      console.log('mulai upload');
      this.setState  ({loading : true })

      const data = new FormData();
      //data.append('name', 'Fotoku'); // you can append anyone.
      data.append('fileToUpload', {
        uri: this.state.uri,
        type: 'image/jpeg', // or photo.type
        name: this.state.fileName,
      });
      const url= "https://dodiartha.000webhostapp.com/api/inputgambar.php"
      fetch(url, {
        method: 'post',
        body: data
      })
      .then((response) => response.json())
      .then((responseJson) =>
        {
          console.log(responseJson);
          this.setState  ({
              loading : false
             })
        });
    }

  UpdateRecord = () =>{
      this.uploadPicture();
      this.setState({ ActivityIndicator_Loading : true }, () =>
        {
            fetch('https://dodiartha.000webhostapp.com/api/Update.php', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({

              tanggal : this.state.tanggal,

              nama : this.state.nama,

              ajang : this.state.ajang,

              materi : this.state.materi,

              job: this.state.job,

              reportase: this.state.reportase,

              image: 'https://dodiartha.000webhostapp.com/api/uploads/' + this.state.image,

            })

            }).then((response) => response.json())
                .then((responseJson) => {

                  this.setState({ ActivityIndicator_Loading : false });
                  // Showing response message coming from server updating records.
                  Alert.alert(responseJson);

                }).catch((error) => {
                  console.error(error);
                  this.setState({ ActivityIndicator_Loading : false });
                });
        });
      }
DeleteRecord = () =>{
        this.setState({ ActivityIndicator_Loading : true }, () =>
        {
          fetch('https://dodiartha.000webhostapp.com/api/delete.php', {
          method: 'POST',
          headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          },
          body: JSON.stringify({

            tanggal : this.state.tanggal

          })

          }).then((response) => response.json())
          .then((responseJson) => {
            this.setState({ ActivityIndicator_Loading : false });
            // Menampilkan pesan yang ada di query
            Alert.alert(responseJson);
            this.props.navigation.navigate('Data');

          }).catch((error) => {
             console.error(error);
             this.setState({ ActivityIndicator_Loading : false });
          });


          });
      }



  render() {
    return (
      <ScrollView style = { styles.MainContainer }>
        <View style={styles.container}>
                <TextInput
                  placeholder = "Tanggal"
                  style = { styles.TextInputStyleClass }
                  underlineColorAndroid = "transparent"
                  returnKeyType="next"
                  keyboardType="numeric"
                  value={this.state.tanggal}
                  onChangeText = {(TextInputText) => this.setState({ tanggal: TextInputText })} />

                <TextInput
                  placeholder = "Nama Penyiar"
                  style = { styles.TextInputStyleClass }
                  underlineColorAndroid = "transparent"
                  returnKeyType="next"
                  autoCapitalize="words"
                  value={this.state.nama}
                  onChangeText = {(TextInputText) => this.setState({ nama: TextInputText })} />

                <TextInput
                  placeholder = "Ajang"
                  style = { styles.TextInputStyleClass }
                  underlineColorAndroid = "transparent"
                  returnKeyType="next"
                  autoCapitalize="words"
                  value={this.state.ajang}
                  onChangeText = {(TextInputText) => this.setState({ ajang: TextInputText })} />

                <TextInput
                  placeholder = "Materi Siaran"
                  style = { styles.TextInputStyleClass }
                  underlineColorAndroid = "transparent"
                  returnKeyType="next"
                  value={this.state.materi}
                  onChangeText = {(TextInputText) => this.setState({ materi: TextInputText })} />

                <TextInput
                  placeholder = "Jam Siaran"
                  style = { styles.TextInputStyleClass }
                  underlineColorAndroid = "transparent"
                  returnKeyType="next"
                  keyboardType="numeric"
                  value={this.state.job}
                  onChangeText = {(TextInputText) => this.setState({ job : TextInputText })} />

                <TextInput
                  placeholder = "Reportase"
                  style = { styles.TextInputStyleClass }
                  underlineColorAndroid = "transparent"
                  returnKeyType="next"
                  value={this.state.reportase}
                  onChangeText = {(TextInputText) => this.setState({ reportase : TextInputText })} />

                <View style={styles.conPreview} >
                 {(this.state.srcImg!='') &&
                    (<Image source={this.state.srcImg} style={styles.uploadAvatar} />)
                 }
               </View>

                <Button
                  onPress={
                    () => this.choosePicture()
                  }
                  title="Pilih Foto"
                />

                <TouchableOpacity
                  activeOpacity = { 0.5 }
                  style = { styles.TouchableOpacityStyle }
                  onPress = { this.UpdateRecord }>

                    <Text style = { styles.TextStyle }>Update</Text>

                </TouchableOpacity>
                {

                this.state.ActivityIndicator_Loading ? <ActivityIndicator color='#2196F3' size='large'style={styles.ActivityIndicatorStyle} /> : null

                }

                 <TouchableOpacity
                  activeOpacity = { 0.5 }
                  style = { styles.OpacityStyle }
                  onPress = { this.DeleteRecord }>

                    <Text style = { styles.TextStyle }>Delete</Text>


                </TouchableOpacity>

                {

                this.state.ActivityIndicator_Loading ? <ActivityIndicator color='#2196F3' size='large'style={styles.ActivityIndicatorStyle} /> : null

                }
                </View>
            </ScrollView> //penutup containerMain


    );
  }
}
const styles = StyleSheet.create(
{
    MainContainer:
    {
      flex: 1,
      backgroundColor:'#16a085',
    },

    container: {
      flex: 1,
      alignItems: 'center',
      marginVertical: 30,
    },

    TextInputStyleClass:
    {
      textAlign: 'center',
      height: 40,
      backgroundColor : "#fff",
      borderWidth: 1,
      borderColor: '#2196F3',
      borderRadius: 7 ,
      marginBottom: 10,
      width: '95%'
    },

    BoxClass:
    {
      alignItems: 'flex-start',
      height: 150,
      backgroundColor : "#fff",
      borderWidth: 1,
      borderColor: '#2196F3',
      borderRadius: 7 ,
      marginBottom: 10,
      width: 270,
      paddingTop: 5,
      paddingBottom: 5
    },

    TouchableOpacityStyle:
   {
      paddingTop:10,
      paddingBottom:10,
      backgroundColor:'green',
      marginBottom: 20,
      width: '70%',
      borderRadius: 7

    },
     OpacityStyle:
   {
      paddingTop:10,
      paddingBottom:10,
      backgroundColor:'red',
      marginBottom: 20,
      width: '70%',
      borderRadius: 7

    },

    TextStyle:
    {
       color: '#fff',
        textAlign: 'center',
        fontSize: 18
    },

    ActivityIndicatorStyle:{

      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center'

  },
  Header: {
        paddingTop: 5,
        paddingBottom: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    TextHeader: {
        fontSize: 20,
        color: '#2c3e50'
    },
    conPreview: {
      flex:1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    uploadAvatar: {
      height: 400,
      width: 400
    },
    indicator: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      height: 80
    }
});
