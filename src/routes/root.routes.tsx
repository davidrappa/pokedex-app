import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "@/screens/HomeScreen";

const Root = createStackNavigator();

const screenOptions = {
  headerShown: false,
  cardOverlayEnabled: true,
};

const RootRoutes = (): JSX.Element => {
  return (
    <Root.Navigator screenOptions={screenOptions} initialRouteName="HomeScreen">
      <Root.Group>
        <Root.Screen name="HomeScreen" component={HomeScreen} />
      </Root.Group>
    </Root.Navigator>
  );
};

export default RootRoutes;
