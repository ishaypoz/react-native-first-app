import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
	const [name, setName] = useState('');
	//onChangeText get you the value from the input bar and you can use it in callback function
	return (
		<View>
			<Text>Enter Name</Text>
			<TextInput
				onChangeText={(newValue) => setName(newValue)}
				value={name}
				style={styles.input}
				autoCapitalize="none"
				autoCorrect={flase}
			/>
			{name.length < 1 ? <Text>{name}</Text> : null}
		</View>
	);
};
const styles = StyleSheet.create({
	input: {
		margin: 15,
		borderColor: 'black',
		borderWidth: 1
	}
});
export default TextScreen;
