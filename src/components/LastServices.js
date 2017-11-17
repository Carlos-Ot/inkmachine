import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

import ServicesTable from './ServicesTable';

const LastServices = (props) => {
		return(
			<View style={styles.container} >
				<View style={styles.headerContainer} >
					<Text style={styles.textContainer} >Últimos Atendimentos</Text>
					<Button title='Ver +' onPress={() => props.navigate('Details')} />
				</View>
				<ServicesTable />
			</View>
			)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fffff0",
		marginLeft: 10,
		marginRight: 10,
		marginBottom: 20,
		marginTop: 20,
	},
	headerContainer: {
		flex: 1,
		flexDirection: 'row',
		marginBottom: 15,
	},
	textContainer: {
		flex: 1,
		padding: 10,
		fontSize: 18,
	}
})

export default LastServices;