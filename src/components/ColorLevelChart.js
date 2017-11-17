import React from 'react';
import { View, StyleSheet, Text} from 'react-native';

import { VictoryAxis, VictoryBar, VictoryChart, VictoryLine } from 'victory-native';

const data = [
		{color: "2.4", production: 80},
		{color: "7.45", production: 49},
		{color: "3.0", production: 25},
		{color: "0.4", production: 20},
		{color: "6.0", production: 17},
		{color: "0.1", production: 28},
		{color: "2.9", production: 97},
		{color: "6.1", production: 36},
		{color: "7.13", production: 80},
		{color: "10.91", production: 49},
	];

class ColorLevelChart extends React.Component {

	render(){
		return (
			<View style={styles.container} >
				<Text style={styles.textContainer} >Nível de cor disponível</Text>
				<VictoryChart
				domainPadding={15}
				>
					<VictoryAxis
						tickFormat={(y) => (`${y}`)}
						tickLabels={{fontSize: 5, padding: 5}}
						style={{tickLabels: {fontSize: 10, padding: 5}}}
					/>
					<VictoryAxis
						dependentAxis
						tickFormat={[0, 50, 100]}
					/>
					<VictoryLine
						data={[{x: 0, y: 30}, {x: 10, y: 30}]}
						scale={{x: 'linear', y: 'linear'}}
						style={{
					      data: { stroke: "#FE2E2E" },
					    }}
						standalone={false}
					/>
					<VictoryBar
						style={{
							data: {fill: "#01DFD7", labels: { padding: 5 }}
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

export default ColorLevelChart;