import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ImageDetail = (props) => {
	return (
		<View>
			<Image source={props.imageSource} />
			<Text>{props.title}</Text>
		</View>
	);
};
const styles = StyleSheet.create({});
export default ImageDetail;
