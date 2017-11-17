import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const topCustomers = [
	{name: 'Juliana Silva', value: '120g'},
	{name: 'Raquel Alves', value: '120g'},
	{name: 'Margie Simpson', value: '90g'},
	{name: 'Kara Denvers', value: '60g'}
]

class TopCustomers extends React.Component {

	renderList() {
		return topCustomers.map(customer =>
			<View style={styles.listItem} key={customer.name} >
				<Text style={ styles.textName } >{customer.name}</Text>
				<Text style={ styles.textValue } >{customer.value}</Text>
			</View>);
	}

	render() {
		return (
			<View style={styles.container} >
				<Text style={styles.textTitle} >Top Clientes</Text>
				{this.renderList()}
			</View>
			)
	}
	
 }

 const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fffff0",
		marginLeft: 10,
		marginRight: 10,
	},
	listItem: {
		flex: 1,
		flexDirection: 'row',
		padding: 10,
		borderBottomWidth: 0.5,
		borderColor: '#000000',
		justifyContent: 'space-between',
	},
	textName: {
		fontSize: 14,
		marginRight: 10,
	},
	textValue: {
		fontSize: 14,
		alignSelf: 'flex-end',
	},
	textTitle: {
		fontSize: 16,
		padding: 5,
		borderBottomWidth: 1,
		borderColor: '#000000',
	}
});

 export default TopCustomers;