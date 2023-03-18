import { Text, View } from 'react-native'
import React, { Component } from 'react'
import tailwind from "tailwind-rn";
import { TextInput, Button } from 'react-native';


export class Signup extends Component {

	// add verification for signup 


	render() {
		return (
			<><View style={tailwind(" bg-yellow-100 rounded-xl m-2 mt-5")}>
				<Text style={tailwind("items-center text-xl font-bold text-red-500 px-5 my-9")}>
					AttendMe
				</Text>
			</View>
				<View
					style={tailwind("bg-gray-200 rounded-xl m-7 p-5 ")}
				>

					<Text
						style={tailwind("text-center text-xl font-bold text-blue-500 px-2 rounded-xl my-5")}
					>
						Signup
					</Text>
					<View style={tailwind('flex-col mx-4 items-center rounded-xl')}>
						<View style={tailwind('flex-row w-60 m-4 p-3 bg-gray-300 rounded-xl')}>
							<TextInput
								placeholder='Email'
								placeholderTextColor="#808080"
								keyboardType='default' />
						</View>
						<View style={tailwind('flex-row w-60  p-3 bg-gray-300 rounded-xl')}>
							<TextInput
								placeholder='Password'
								placeholderTextColor="#808080"
								keyboardType='default' />
						</View>
						<View style={tailwind('flex-row w-60 mt-4  p-3 bg-gray-300 rounded-xl')}>
							<TextInput
								placeholder='Re-enter Password'
								placeholderTextColor="#808080"
								keyboardType='default' />
						</View>
						<View style={tailwind('flex-row  mt-3 items-center p-3 bg-yellow-200 rounded-xl')}>
							{/* add button */}
							<Button
								title='Signup'
								mode="outlined"
								onPress={() => {

								}

								}
							/>
						</View>
					</View>

				</View></>

		)
	}
}

