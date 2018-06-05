import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default class Slider extends React.Component{
	render(){
		return (

			<View style={styles.containerMain}>
				<View style={styles.box1}>
					<Text style={{ padding: 30, fontsize: 20, color: 'white', textAlign:'center'}}>Pendidikan Teknik Iinformatika</Text>
				</View>
				<View style={styles.box2}>
					<Text style={styles.text}>Slider</Text>
				</View>
				<View style={styles.box3}>
					<View style={styles.button}><Text>1</Text></View>
					<View style={styles.button}><Text>2</Text></View>
					<View style={styles.button}><Text>3</Text></View>
					<View style={styles.button}><Text>4</Text></View>
				</View>
				<View style={styles.box4}>
					<View style={styles.button}><Text>5</Text></View>
					<View style={styles.button}><Text>6</Text></View>
					<View style={styles.button}><Text>7</Text></View>
					<View style={styles.button}><Text>8</Text></View>
				</View>
				<View style={styles.box5}>
					<Text style={{ padding: 30, fontsize: 20, color: 'white', textAlign:'center'}}>#JaenKuliahdiPTI</Text>
					
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
		flex: 1,
		backgroundColor: 'blue'

	},
	box2: {
		flex: 1,
		backgroundColor: 'yellow',
		justifyContent: 'space-around',
		flexDirection: 'column',
		alignItems:'center'
	},
	box3: {
		flex: 1,
		backgroundColor: '#64B5F6',
		justifyContent: 'center',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems:'center',
		marginTop: 10,
		marginLeft: 10,
		marginRight: 10
	},
	box4: {
		flex: 1,
		backgroundColor: '#64B5F6',
		justifyContent: 'center',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems:'center',
		marginTop: 10,
		marginLeft: 10,
		marginRight: 10
	},
	button: {
		width:50,
		height: 50,
		backgroundColor: 'white',
		justifyContent: 'center',
		alignItems:'center'
	},
	box5: {
		flex: 1,
		backgroundColor: '#0D47A1',
		margin: 10
	},
	text: {
		fontSize: 20
	},
});

