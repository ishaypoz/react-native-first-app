import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const BoxScreen = () => {
	return (
		<View style={styles.viewStyle}>
			<Text style={styles.textStyle}>Child #1</Text>
			<Text style={styles.textStyle}>Child #2</Text>
			<Text style={styles.textStyle}>Child #3</Text>
		</View>
	);
};
const styles = StyleSheet.create({
	viewStyle: {
		borderColor: 'black',
		borderWidth: 3,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	textStyle: {
		borderWidth: 10,
		borderColor: 'red',
		margin: 20,
		flex: 1
	}
});
export default BoxScreen;
