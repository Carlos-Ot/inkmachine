import React from 'react'
import { View , Text, StyleSheet } from 'react-native'

const Summary = () => {
	return (
		<View style={styles.container} >
		<View style={styles.leftSide} >
			<Text style={styles.textNumber} >158</Text>
			<Text style={styles.textLabel} >Clientes{"\n"}Atendidos</Text>
		</View>
		<View style={styles.rightSide} >
			<Text style={styles.textNumber} >26</Text>
			<Text style={styles.textLabel} >Cores{"\n"}Criadas</Text>
		</View>
		</View>
		)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		marginBottom: 20,
		marginTop: 20,
	},
	leftSide: {
		flex: 1,
		flexDirection: 'row',
		marginRight: 10,
		marginLeft: 10,
		padding: 10,
		backgroundColor: "#fffff0"
	},
	rightSide: {
		flex: 1,
		flexDirection: 'row',
		marginRight: 10,
		padding: 10,
		backgroundColor: "#fffff0"
	},
	textNumber: {
		fontSize: 38,
	},
	textLabel: {
		fontSize: 18,
		paddingLeft: 5,
		paddingRight: 5,
		alignSelf: 'center'
	}
});

export default Summary;
