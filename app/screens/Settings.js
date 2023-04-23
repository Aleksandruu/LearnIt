import React from "react";
import { View, ScrollView } from "react-native";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";
import { Dimensions } from "react-native";

const Settings = ({ navigation }) => {
  return (
    <View>
      <Header navigation={navigation} title="Settings" />
      <ScrollView
        style={{ height: Dimensions.get("window").height - 110 }}
      ></ScrollView>
      <BottomNav navigation={navigation} activeTab={"Settings"} />
    </View>
  );
};

export default Settings;
