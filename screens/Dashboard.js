import { Text, View, Alert, ScrollView } from 'react-native'
import React, { Component } from 'react'
import tailwind from "tailwind-rn";
import { TextInput, Button, Dimensions } from 'react-native';
import { MapPinIcon, ArrowRightIcon } from "react-native-heroicons/solid";
import { Cog6ToothIcon } from "react-native-heroicons/outline";
import { PieChart } from 'react-native-chart-kit';
// import GeofencingExample from '../component/GeofencingExample';
import Geofence from '../component/Geofence.js';



const Present = 75;

const data = [
	{
		name: 'Present',
		attendance: Present,
		color: '#32CD32',
		legendFontColor: '#7F7F7F',
		legendFontSize: 15,
	},
	{
		name: 'Absent',
		attendance: 100 - Present,
		color: 'red',
		legendFontColor: '#7F7F7F',
		legendFontSize: 15,
	}
];

const chartConfig = {
	backgroundColor: '#ffffff',
	backgroundGradientFrom: '#ffffff',
	backgroundGradientTo: '#ffffff',
	decimalPlaces: 0, // optional, defaults to 2dp
	color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
	labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
	style: {
		borderRadius: 16,
	},
};




const alert = () => Alert.alert('Location Enabled', '', []);


export class Dashboard extends Component {

	render() {
		return (
			<>
			<ScrollView>
				<View style={tailwind("bg-yellow-200 mx-2 mb-3 mt-8 rounded-xl")}>
					<View style={tailwind("flex-row justify-between")}>
						<Text style={tailwind("items-center text-3xl font-semibold text-red-500 px-5  mt-5")}>
							AttendMe
						</Text>
						<Cog6ToothIcon
							style={tailwind("p-3 mt-6 mx-6")}
							size="27"
							color="red"
						></Cog6ToothIcon>
					</View>
					<View style={tailwind("flex-row items-center")}>
						<Text style={tailwind("items-center text-xl text-gray-500 px-5 my-3 mb-5")}>
							Hello 👋, Urva !
						</Text>
						<ArrowRightIcon style={tailwind("mb-2")} color='gray' />
					</View>
				</View>

				<View style={tailwind("bg-gray-200 rounded-xl m-2 p-5 ")}>
					<Text style={tailwind("text-left text-lg font-bold text-blue-500 mb-1")}>
						Enable Your Location,
					</Text>
					<Text style={tailwind("text-left text-sm text-gray-400 px-3 ")}>
						In Order to mark yor attendance you have to enable your location.
						Keep your location on while your are in class.
					</Text>
					<View style={tailwind("flex-row justify-between w-60 bg-yellow-100 font-bold rounded-xl m-2 p-3 ")}>
						<Button
							title='Enable Location'
							onPress={alert}
						/>
						<MapPinIcon style={tailwind("p-3 mt-1 mx-2")} />
					</View>
				</View>

				<View>
					<PieChart
						data={data}
						width={Dimensions.get('window').width}
						height={220}
						chartConfig={chartConfig}
						accessor="attendance"
						backgroundColor="transparent"
						paddingLeft="15"
					/>
				</View>
				{/* <GeofencingExample /> */}
				<Geofence/>
				</ScrollView>
			</>

		)
	}
}
