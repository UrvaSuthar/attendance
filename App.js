import { SafeAreaView, Text, View, TouchableOpacity, Paragraph, TextInput, Button } from "react-native";
import tailwind from "tailwind-rn";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import { HomeScreen } from './src/screens/HomeScreen.js';
import { Login } from "./screens/Login.js";
import { Signup } from "./screens/Signup";
import { Dashboard } from "./screens/Dashboard";
import { Timetable } from "./screens/Timetable";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        {/* <Stack.Screen name="Timetable" component={Timetable} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
