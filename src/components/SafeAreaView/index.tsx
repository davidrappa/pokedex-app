import React from "react";
import SafeAreaView, { ForceInsetProp } from "react-native-safe-area-view";
import {
  SafeAreaViewProps,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { StatusBar, Platform } from "react-native";
import { useTheme } from "styled-components";

interface SafeAreaProps extends SafeAreaViewProps {
  type: "primary";
  children: React.ReactNode;
  forceInset?: ForceInsetProp;
  barStyle?: "dark-content" | "light-content";
}

const SafeAreaViewComponent = (props: SafeAreaProps): JSX.Element => {
  const { children, type, barStyle, ...rest } = props;

  const { colors } = useTheme();
  const insets = useSafeAreaInsets();

  const backgroundColor = {
    primary: "#fff",
  };

  return (
    <SafeAreaView
      {...rest}
      style={{
        backgroundColor: backgroundColor[type],
        flex: 1,
        paddingTop: Platform.OS === "android" ? insets.top : 0,
      }}
    >
      <StatusBar
        barStyle={barStyle || "dark-content"}
        backgroundColor={backgroundColor[type]}
        translucent
      />
      {children}
    </SafeAreaView>
  );
};

export default SafeAreaViewComponent;
