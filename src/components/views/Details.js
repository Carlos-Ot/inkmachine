import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const data = [
	{date: '01/13', customer: 'Raquel', color: '7.5', qnt: '60g', hairStylist: 'Samuel'},
	{date: '01/13', customer: 'Maria', color: '6.1', qnt: '30g', hairStylist: 'Suely'},
	{date: '02/13', customer: 'Claudia', color: '4.0', qnt: '120g', hairStylist: 'Luiz'},
	{date: '03/13', customer: 'Carla', color: '6.7+9.1', qnt: '60g + 15g', hairStylist: 'Joana'},
	{date: '03/13', customer: 'Regina', color: '12.0+7.40', qnt: '60g + 60g', hairStylist: 'Samuel'},
	{date: '03/13', customer: 'Clarete', color: '6.0+6.1', qnt: '15g + 15g', hairStylist: 'Samuel'},
];

class Details extends React.Component {
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
					<Text style={styles.labelDate} >Data</Text>
					<Text style={styles.labelCustomer} >Cliente</Text>
					<Text style={styles.labelColor} >Cor</Text>
					<Text style={styles.labelQtd} >Qtd.</Text>
					<Text style={styles.labelHairStylist} >Cabelereiro</Text>
				</View>
				{this.renderList()}
			</View>
			)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fffff0",
		paddingBottom: 20,
		paddingTop: 20,
	},
	headerContainer: {
		flexDirection: 'row',
		borderBottomWidth: 1,
		borderColor: '#000',
	},
	listItem: {
		flexDirection: 'row',
		borderBottomWidth: 1,
		borderColor: '#000'

	},
	textDate: {
		width: 50,
		paddingLeft: 5,
		fontSize: 13,
	},
	textCustomer: {
		width: 70,
		paddingLeft: 5,
		fontSize: 13,
	},
	textColor: {
		width: 65,
		paddingLeft: 5,
		fontSize: 13,
	},
	textQtd: {
		width: 70,
		paddingLeft: 5,
		fontSize: 13,
	},
	textHairStylist: {
		paddingLeft: 5,
		fontSize: 13,
	},
	labelDate: {
		borderRightWidth: 1,
		borderColor: '#000',
		width: 50,
		paddingLeft: 5,
		fontSize: 13,
	},
	labelCustomer: {
		borderRightWidth: 1,
		borderColor: '#000',
		width: 70,
		paddingLeft: 5,
		fontSize: 13,
	},
	labelColor: {
		borderRightWidth: 1,
		borderColor: '#000',
		width: 65,
		paddingLeft: 5,
		fontSize: 13,
	},
	labelQtd: {
		borderRightWidth: 1,
		borderColor: '#000',
		width: 70,
		paddingLeft: 5,
		fontSize: 13,
	},
	labelHairStylist: {
		paddingLeft: 5,
		fontSize: 13,
	}
});

export default Details;