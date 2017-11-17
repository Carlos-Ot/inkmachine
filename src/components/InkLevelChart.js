import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

import { VictoryAxis, VictoryBar, VictoryChart, VictoryLine } from 'victory-native';

const data = [
		{color: "1", production: 80},
		{color: "2", production: 49},
		{color: "3", production: 25},
		{color: "4", production: 20},
		{color: "5", production: 17},
		{color: "6", production: 28},
		{color: "7", production: 97},
		{color: "8", production: 36},
		{color: "9", production: 80},
		{color: "10", production: 49},
		{color: "11", production: 25},
		{color: "12", production: 20},
		{color: "13", production: 17},
		{color: "14", production: 28},
		{color: "15", production: 97},
		{color: "16", production: 36},
		{color: "17", production: 80},
		{color: "18", production: 49},
		{color: "19", production: 25},
		{color: "20", production: 20},
		{color: "21", production: 17},
		{color: "22", production: 28},
		{color: "23", production: 97},
		{color: "24", production: 36},
	];

const InkLevelChart = (props) => {
		return (
			<View style={styles.container} >
				<View style={styles.headerContainer} >
					<Text style={styles.textContainer} >Nível de corante disponível</Text>
					<Button title='Ver +' onPress={() => props.navigate('InkDetails')} />
				</View>
				<VictoryChart
				domainPadding={15}
				>
					<VictoryAxis
						tickFormat={(y) => (`${y}`)}
						tickLabels={{fontSize: 5, padding: 5}}
						style={{tickLabels: {fontSize: 8, padding: 5}}}
					/>
					<VictoryAxis
						dependentAxis
						tickFormat={[0, 50, 100]}
					/>
					<VictoryLine
						data={[{x: 0, y: 30}, {x: 24, y: 30}]}
						scale={{x: 'linear', y: 'linear'}}
						style={{
					      data: { stroke: "#FE2E2E" },
					    }}
						standalone={false}
					/>
					<VictoryBar
						style={{
							data: {fill: "#81DAF5", labels: { padding: 5 }}
						}}
						data={data}
						x="color"
						y="production"
					/>
				</VictoryChart>
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
	},
	headerContainer: {
		flex: 1,
		flexDirection: 'row',
	},
	textContainer: {
		flex: 1,
		padding: 10,
		borderBottomWidth: 0.5,
		borderColor: '#000000',
		fontSize: 18,
	}
});

export default InkLevelChart;