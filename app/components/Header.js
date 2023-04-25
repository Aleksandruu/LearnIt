import React from "react";
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  StatusBar,
  Platform,
  View,
} from "react-native";

const Header = ({ navigation, title, back }) => {
  onPressBack = () => {
    if (back !== 1) {
      navigation.navigate(back);
    } else {
      navigation.goBack();
    }
  };
  return (
    <SafeAreaView
      style={{
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: back ? "space-between" : "center",
        paddingBottom: 10,
        height: 80,
        width: 390,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      {back && (
        <TouchableOpacity
          onPress={onPressBack}
          style={{ paddingLeft: 12, color: "green" }}
        >
          <Text style={{ fontSize: 16, color: "green", paddingLeft: 10 }}>
            Back
          </Text>
        </TouchableOpacity>
      )}
      <Text style={{ fontSize: 24, fontWeight: 500 }}>{title}</Text>
      <View style={{ width: back ? 40 : 0, height: 10 }}></View>
    </SafeAreaView>
  );
};

export default Header;
