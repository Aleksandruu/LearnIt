import React from "react";
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  StatusBar,
  Platform,
  View,
} from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";

const Header = ({ navigation, title, back, edit, setEdit, editEnable }) => {
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
        justifyContent: back || editEnable ? "space-between" : "center",
        paddingBottom: 10,
        height: 80,
        width: 390,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      {!back && <View style={{ width: 15 }}></View>}
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
      {back && <View style={{ width: 30 }}></View>}
      {editEnable && (
        <TouchableOpacity onPress={() => setEdit(!edit)}>
          <SimpleLineIcons name="options-vertical" size={16} color="black" />
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};

export default Header;
