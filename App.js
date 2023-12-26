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

export default function App() {
  return (
    <>
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
