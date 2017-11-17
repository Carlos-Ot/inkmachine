import React from 'react';
import { View, StyleSheet, Text} from 'react-native';

import { VictoryAxis, VictoryBar, VictoryChart } from 'victory-native';

const data = [
		{color: "03", production: 350},
		{color: "05", production: 300},
		{color: "08", production: 250},
		{color: "27", production: 200},
		{color: "12", production: 175},
		{color: "09", production: 200},
		{color: "31", production: 60},
		{color: "17", production: 30},
	];

class ConsumedDyeChart extends React.Component {

	render(){
		return (
			<View style={styles.container} >
				<Text style={styles.textContainer} >Corantes Mais Consumidos</Text>
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
							data: {fill: "#2ECCFA", labels: { padding: 15 }}
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
	},
	textContainer: {
		flex: 1,
		padding: 10,
		borderBottomWidth: 0.5,
		borderColor: '#000000',
		fontSize: 18,
	}
});

export default ConsumedDyeChart;