import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default class BelajarLayout extends React.Component{
	render(){
		return (

			<View style={styles.containerMain}>
				<View style={styles.box1}>
				<Text style={styles.text}>1</Text>
				</View>
				<View style={styles.box2}>
				<Text style={styles.text}>A</Text>
				<Text style={styles.text}>B</Text>
				<Text style={styles.text}>C</Text>
				</View>
				<View style={styles.box3}>
				<Text style={styles.text}>3</Text>
				</View>
			</View>
			);
	}
}

const styles = StyleSheet.create({
	containerMain: {
		backgroundColor: 'blue',
		flex: 1,
		flexDirection: 'column'
	},
	box1: {
		flex: 3,
		backgroundColor: 'blue',
		justifyContent: 'center'
	},
	box2: {
		flex: 2,
		backgroundColor: 'yellow',
		justifyContent: 'center',
		flexDirection: 'row'
	},
	box3: {
		flex: 1,
		backgroundColor: 'red',
		justifyContent: 'center'
	},
	text: {
		fontSize: 50
	},

});