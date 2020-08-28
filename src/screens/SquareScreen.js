import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;
const COLOR_DECREMENT = -15;

const reducer = (state, action) => {
	switch (action.colorToChnage) {
		case 'red':
			return { ...state, red: state.red + action.amout };
		case 'blue':
			return { ...state, blue: state.blue + action.amout };
		case 'green':
			return { ...state, green: state.green + action.amout };
		default:
			return state;
	}
};

const SquareScreen = () => {
	const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
	const { red, green, blue } = state;
	return (
		<View>
			<ColorCounter
				onIncrease={() => dispatch({ colorToChnage: 'red', amount: COLOR_INCREMENT })}
				onDecrease={() => dispatch({ colorToChnage: 'red', amount: COLOR_DECREMENT })}
				color="Red"
			/>
			<ColorCounter
				onIncrease={() => dispatch({ colorToChnage: 'blue', amount: COLOR_INCREMENT })}
				onDecrease={() => dispatch({ colorToChnage: 'blue', amount: COLOR_DECREMENT })}
				color="Blue"
			/>
			<ColorCounter
				onIncrease={() => dispatch({ colorToChnage: 'green', amount: COLOR_INCREMENT })}
				onDecrease={() => dispatch({ colorToChnage: 'green', amount: COLOR_DECREMENT })}
				color="Green"
			/>
			<View style={{ height: 150, width: 150, backgroundColor: `rgb(${red},${blue},${green})` }} />
		</View>
	);
};
const styles = StyleSheet.create({});
export default SquareScreen;
