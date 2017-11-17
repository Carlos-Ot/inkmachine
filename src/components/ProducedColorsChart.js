import React from 'react';
import { View, StyleSheet, Text} from 'react-native';

import { VictoryAxis, VictoryBar, VictoryChart } from 'victory-native';

const data = [
		{color: "6.0", production: 350},
		{color: "6.1", production: 350},
		{color: "7.4", production: 250},
		{color: "0.4", production: 270},
		{color: "12.0", production: 175},
		{color: "6.7", production: 200},
		{color: "4.5", production: 102},
		{color: "9.1", production: 75},
	];

class ProducedColorsChart extends React.Component {

	render(){
		return (
			<View style={styles.container} >
				<Text style={styles.textContainer} >Cores Mais Produzidas</Text>
				<VictoryChart
				domainPadding={15}
				>
					<VictoryAxis
						tickFormat={(y) => (`${y}`)}
					/>
					<VictoryAxis
						dependentAxis
						tickFormat={[75, 175, 350]}
					/>
					<VictoryBar
						style={{
							data: {fill: "blue", labels: { padding: 15 }}
						}}
						data={data}
						x="color"
						y="production"
					/>
				</VictoryChart>
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
		marginBottom: 20,
	},
	textContainer: {
		flex: 1,
		padding: 10,
		borderBottomWidth: 0.5,
		borderColor: '#000000',
		fontSize: 18,
	}
});

export default ProducedColorsChart;