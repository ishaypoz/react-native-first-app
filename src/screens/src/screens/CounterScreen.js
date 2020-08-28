import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CounterScreen = () => {
	const [counter, setCounter] = useState(0);
	return (
		<View>
			<Button onPress={setCounter(counter + 1)} title="Increase" />
			<Button oonPress={setCounter(counter - 1)} title="Decrease" />

			<Text>Current Count:</Text>
		</View>
	);
};

const styles = StyleSheet.create({});
export default CounterScreen;
