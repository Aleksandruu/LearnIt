import React from "react";
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  StatusBar,
  Platform,
} from "react-native";

const Header = ({ title, onPressBack }) => {
  return (
    <SafeAreaView
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: 80,
        width: 390,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: 500 }}>{title}</Text>
    </SafeAreaView>
  );
};

export default Header;
