import { Text, View } from 'react-native'
import React, { Component } from 'react'
import tailwind from "tailwind-rn";
import { TextInput, Button } from 'react-native';
import { TouchableOpacity } from 'react-native';


export class Login extends Component {
	render() {
		return (
			// edit header
			<><View style={tailwind("")}>
				<Text style={tailwind("items-center text-xl font-bold text-red-600 px-5  my-9")}>
					AttendMe
				</Text>
			</View>
			<View
				style={tailwind("bg-gray-200 rounded-xl m-10 p-5 ")}
			>

					<Text
						style={tailwind("text-center text-xl font-bold text-blue-500 px-5 rounded-xl my-5")}
					>
						Login
					</Text>
					<View 
					style={tailwind('flex-col mx-4 pb-3 items-center rounded-xl')}>
						<View style={tailwind('flex-row w-60 m-4 p-3 bg-gray-300 rounded-xl')}>
							<TextInput placeholder='Username'
							placeholderTextColor="#808080"
							keyboardType='default' />
						</View>
						<View style={tailwind('flex-row p-3 bg-gray-300 rounded-xl')}>
							<TextInput 
							style={{ flex: 1, width: '100%' }}
							placeholder='Password' 
							placeholderTextColor="#808080"
							keyboardType='default' />
						</View>
						<View style={tailwind('flex-row  mt-3 items-center p-3 bg-yellow-200 rounded-xl')}>
							{/* add button */}
							<Button 
							title='Login' 
							onPress={() => this.props.navigation.navigate('Dashboard')}
							/>
						</View>
					</View>
						<TouchableOpacity>
							<Text style={tailwind('text-red-500 mt-3')}>Forgot Password?</Text>
							<Text></Text>
						</TouchableOpacity>

				</View></>

		)
	}
}

