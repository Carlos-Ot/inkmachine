import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const data = [
	{date: '01/11', customer: 'Raquel', color: '7.5', qnt: '60g', hairStylist: 'Samuel'},
	{date: '01/11', customer: 'Maria', color: '6.1', qnt: '30g', hairStylist: 'Suely'},
	{date: '02/11', customer: 'Claudia', color: '4.0', qnt: '120g', hairStylist: 'Luiz'},
	{date: '03/11', customer: 'Carla', color: '6.7+9.1', qnt: '60g + 15g', hairStylist: 'Joana'},
	{date: '03/11', customer: 'Regina', color: '12.0+7.40', qnt: '60g + 60g', hairStylist: 'Samuel'},
	{date: '03/11', customer: 'Clarete', color: '6.0+6.1', qnt: '15g + 15g', hairStylist: 'Samuel'},
];

class ServicesTable extends React.Component {

	renderList() {
		return data.map(entry => 
			<View style={styles.listItem} key={entry.customer} >
				<Text style={styles.textDate} >{entry.date}</Text>
				<Text style={styles.textCustomer} >{entry.customer}</Text>
				<Text style={styles.textColor} >{entry.color}</Text>
				<Text style={styles.textQtd} >{entry.qnt}</Text>
				<Text style={styles.textHairStylist} >{entry.hairStylist}</Text>
			</View>
			)
	}

	render() {
		return (
			<View style={styles.container} >
				<View style={styles.headerContainer} >
					<Text style={styles.textDate} >Data</Text>
					<Text style={styles.textCustomer} >Cliente</Text>
					<Text style={styles.textColor} >Cor</Text>
					<Text style={styles.textQtd} >Qtd.</Text>
					<Text style={styles.textHairStylist} >Cabelereiro</Text>
				</View>
				{this.renderList()}
			</View>
			)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingBottom: 10,
	},
	headerContainer: {
		flex: 1,
		flexDirection: 'row',
		borderBottomWidth: 1,
		borderColor: '#000',
	},
	listItem: {
		flex: 1,
		flexDirection: 'row',

	},
	textDate: {
		borderRightWidth: 1,
		borderColor: '#000',
		width: 50,
		paddingLeft: 5,
		fontSize: 11,
	},
	textCustomer: {
		borderRightWidth: 1,
		borderColor: '#000',
		width: 70,
		paddingLeft: 5,
		fontSize: 11,
	},
	textColor: {
		borderRightWidth: 1,
		borderColor: '#000',
		width: 65,
		paddingLeft: 5,
		fontSize: 11,
	},
	textQtd: {
		borderRightWidth: 1,
		borderColor: '#000',
		width: 70,
		paddingLeft: 5,
		fontSize: 11,
	},
	textHairStylist: {
		paddingLeft: 5,
		fontSize: 11,
	}
});

export default ServicesTable;