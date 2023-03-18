import { SafeAreaView, Text, View, TouchableOpacity, Paragraph, TextInput, Button } from "react-native";
import tailwind from "tailwind-rn";
import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { HomeScreen } from './src/screens/HomeScreen.js';
// const Stack = createNativeStackNavigator();
import {Login} from "./screens/Login.js";
import {Signup} from "./screens/Signup";
import {Dashboard} from "./screens/Dashboard";


export default function App() {
  return (
    <SafeAreaView>
      {/* <Login/> */}
      {/* <Signup /> */}
      <Dashboard />
    </SafeAreaView>
  );
}
