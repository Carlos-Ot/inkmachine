import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const topHairStylist = [
	{name: 'Samuel Silva', value: '975g'},
	{name: 'Suely Alves', value: '850g'},
	{name: 'Joana Braga', value: '100g'},
	{name: 'Edelson Silva', value: '60g'}
]

class TopHairStylist extends React.Component {

	renderList() {
		return topHairStylist.map(hairStylist =>
			<View style={styles.listItem} key={hairStylist.name} >
				<Text style={ styles.textName } >{hairStylist.name}</Text>
				<Text style={ styles.textValue } >{hairStylist.value}</Text>
			</View>);
	}

	render() {
		return (
			<View style={styles.container} >
			<Text style={styles.textTitle} >Top Cabeleleiros</Text>
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

 export default TopHairStylist;