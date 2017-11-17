import React from 'react';
import { View, Text, Picker, Button, ScrollView, StyleSheet } from 'react-native';

import Summary from '../Summary';
import ProducedColorsChart from '../ProducedColorsChart';
import ConsumedDyeChart from '../ConsumedDyeChart';
import TopTable from '../TopTable';
import InkLevelChart from '../InkLevelChart';
import ColorLevelChart from '../ColorLevelChart';
import LastServices from '../LastServices';

class Home extends React.Component {
	static navigationOptions = ({ navigation }) => ({
			title: 'Ink Machine Gun',
		});

	render() {
		return (
		<View>
			<ScrollView>
				<View style={styles.picker} >
					<Picker mode={'dropdown'}>
						<Picker.Item label="Ago" value="ago" />
						<Picker.Item label="Set" value="set" />
						<Picker.Item label="Out" value="out" />
						<Picker.Item label="Nov" value="nov" />
						<Picker.Item label="Dez" value="dez" />
					</Picker>
				</View>
				<Summary />
				<ProducedColorsChart />
				<ConsumedDyeChart />
				<TopTable />
				<InkLevelChart navigate={this.props.navigation.navigate} />
				<ColorLevelChart />
				<LastServices navigate={this.props.navigation.navigate} />
			</ScrollView>
		</View>
		)
	}
}

const styles = StyleSheet.create({
	picker: {
		backgroundColor: "#fffff0",
	}
});

export default Home;