import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import TopCustomers from './TopCustomers';
import TopHairStylist from './TopHairStylist';

const TopTable = () => {
	return (
		<View style={styles.container} >
			<TopCustomers />
			<TopHairStylist />	
		</View>
		)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: "#fffff0",
		marginLeft: 10,
		marginRight: 10,
		marginTop: 20,
		marginBottom: 20,
		paddingBottom: 20,
		paddingTop: 20,
	},
});

export default TopTable;