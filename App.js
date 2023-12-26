import { StyleSheet, Text, View } from "react-native";
import Signup from "./components/Signup";

import { StatusBar } from "expo-status-bar";
import FabricatorRegistrations from "./components/FabricatorRegistrations";
import Login from "./components/Login";
import Otp from "./components/Otp";
import Home from "./components/Home";
import TabNavigation from "./components/TabNavigation";
import { SafeAreaView } from "react-native-safe-area-context";

import HorizontalImageScroller from "./components/Category";
import YourComponent from "./components/Category";
import LeftMenu from "./components/LeftMenu";
import DrawerNavigation from "./components/DrawerNavigation";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export default function App() {
  return (
    <>
    {/* <NavigationContainer independent={true}>
     <Stack.Navigator screenOptions={{headerShown:false}} >
      <Stack.Screen name="Login page" component={Login} />
      <Stack.Screen name="OTP" component={Otp} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
    </NavigationContainer> */}
      {/* <Login /> */}
      {/* <FabricatorRegistrations /> */}
      {/* <Signup /> */}
      {/* <Otp /> */}
      <SafeAreaView style={{ flex: 1 }}>
        <TabNavigation />
        {/* <DrawerNavigation /> */}
        {/* <LeftMenu /> */}
      </SafeAreaView>
      {/* {/* <StatusBar style="dark" /> */}
    </>
  );
}
