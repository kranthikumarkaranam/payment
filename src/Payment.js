import React, { useState } from 'react';
import {
	View,
	StyleSheet,
	TextInput,
	Text,
	TouchableOpacity,
} from 'react-native';
import { colors } from './styles';

const Payment = () => {
	const [amount, setAmount] = useState('');
	const [isValid, setIsValid] = useState(false);

	const handleAmountChange = (value) => {
		// Only allow whole numbers
		if (/^\d+$/.test(value) || value === '') {
			setAmount(value);
			setIsValid(value !== ''); // Check if the input is not empty
		} else {
			setIsValid(false);
		}
	};

	return (
		<View style={[styles.container]}>
			<View>
				<Text style={[styles.title]}>Paying your friend</Text>
				<View style={[styles.paymentContainer]}>
					<Text style={[styles.label]}>$</Text>
					<TextInput
						style={[styles.input]}
						placeholder='0'
						testID='input'
						placeholderTextColor='#BFBFBF'
						autoFocus
						keyboardType='numeric'
						value={amount}
						onChangeText={handleAmountChange}
					/>
				</View>
			</View>
			<View>
				<TouchableOpacity
					style={[
						styles.payButton,
						!isValid && styles.disabled, // Apply the disabled style if the input is invalid
					]}
					testID='pay-button'
					disabled={!isValid} // Disable the button if the input is invalid
				>
					<Text style={[styles.loginButtonText]}>PAY NOW</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default Payment;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-around',
		flexDirection: 'column',
		backgroundColor: colors.secondaryColor,
	},
	paymentContainer: {
		flex: 1,
		alignItems: 'center',
		marginTop: 40,
		flexDirection: 'row',
		justifyContent: 'center',
	},
	title: {
		color: '#f5f5f5',
		fontSize: 20,
		textAlign: 'center',
	},
	label: {
		color: '#e3e3e3',
		fontSize: 24,
	},
	input: {
		height: 46,
		borderRadius: 4,
		fontSize: 44,
		width: 200,
		color: '#fff',
		marginLeft: 16,
	},
	payButton: {
		width: '80%',
		marginLeft: '10%',
		backgroundColor: colors.brandColor,
		alignItems: 'center',
		paddingVertical: 16,
		borderRadius: 44,
		shadowColor: colors.brandColor,
		shadowOffset: {
			width: 0,
			height: 5,
		},
		shadowOpacity: 0.07,
		shadowRadius: 3.84,
		elevation: 5,
	},
	disabled: {
		backgroundColor: '#787878',
		color: '#f5f5f5',
	},
	loginButtonText: {
		color: 'white',
		fontSize: 16,
		fontWeight: 'bold',
	},
});
