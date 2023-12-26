import { StyleSheet, Image } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import LeftMenu from "./LeftMenu";
import RightItems from "./RightItems";
import { perfectSize } from "./Login";

import AccountContent from "./AccountContent";
import Notification from "./Notification";

const Account = () => {
  const drawer = createDrawerNavigator();
  return (
    <drawer.Navigator
      screenOptions={{
        headerRight: () => <RightItems />,
        headerTitle: () => (
          <Image source={require("../assets/logo.png")} style={styles.logo} />
        ),
      }}
      drawerContent={(props) => <LeftMenu {...props} />}
    >
      <drawer.Screen name="Accounts" component={AccountContent} />
      <drawer.Screen name="Notification" component={Notification} />
    </drawer.Navigator>
  );
};

export default Account;
const styles = StyleSheet.create({
  logo: {
    // marginLeft: perfectSize(-23),
    width: perfectSize(190),
    resizeMode: "contain",
  },
});
