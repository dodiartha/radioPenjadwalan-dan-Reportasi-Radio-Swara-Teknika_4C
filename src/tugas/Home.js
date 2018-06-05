import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default class Home extends React.Component{
  render(){
    return (
      

      <View style={styles.containerMain}>
        <View style={styles.box1}>
          <Text style={styles.text}>Jadwal Siaran Radio Swara Teknika </Text>
        </View>
        <View style={styles.box2}>
          <Text style={styles.text}></Text>       
        </View>
        
      </View>
      );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'column',
    paddingTop: 24
  },
  box1: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingTop: 18

  },
  box2: {
    flex: 4,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  box3: {
    flex: 3,
    backgroundColor: 'white',
    justifyContent: 'center',
    flexDirection: 'row'
  },
 
  text: {
    fontSize: 25,
    alignItems: 'center'
    
  },

});