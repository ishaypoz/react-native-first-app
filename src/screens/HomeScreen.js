import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = (props) => {
	//navigation function from the react  stack navigtor
	//console.log(props.navigation);
	return (
		<View>
			<Text style={styles.text}>HomeScreen</Text>
			<Button onPress={() => props.navigation.navigate('Components')} title="Go to Components Demo" />
			<Button onPress={() => props.navigation.navigate('Image')} title="Go to Image Demo" />
			<Button onPress={() => props.navigation.navigate('Counter')} title="Go to Counter Demo " />
			<Button onPress={() => props.navigation.navigate('Color')} title="Go to Color Demo" />{' '}
			<Button onPress={() => props.navigation.navigate('Square')} title="Go to Square Demo" />
			<TouchableOpacity onPress={() => props.navigation.navigate('List')}>Go to List Demo</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 30
	}
});

export default HomeScreen;
