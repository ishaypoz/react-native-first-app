import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const ListScreen = () => {
	const freinds = [
		{ name: 'Friend #1', age: 20 },
		{ name: 'Friend #2', age: 21 },
		{ name: 'Friend #3', age: 22 },
		{ name: 'Friend #4', age: 23 },
		{ name: 'Friend #5', age: 24 },
		{ name: 'Friend #6', age: 25 },
		{ name: 'Friend #7', age: 26 }
	];

	return (
		<FlatList
			/*horizontal
			showsHotizontalScrollIndeicator={false}*/
			keyExtractor={(freind) => friend.name}
			data={friends}
			renderItem={(element) => {
				//element === {item:{name: 'Friend #1'},index: 0}
				return (
					<Text style={styles.textStyle}>
						{item.name} - Age {item.age}
					</Text>
				);
			}}
		/>
	);
};
const styles = StyleSheet.create({
	textStyle: {
		marginVertical: 50
	}
});

export default ListScreen;
