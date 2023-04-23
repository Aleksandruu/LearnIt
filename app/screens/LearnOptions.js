import React from "react";
import { View, ScrollView } from "react-native";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";
import { Dimensions } from "react-native";

const LearnOptions = ({ navigation, data }) => {
  return (
    <View>
      <Header navigation={navigation} back={"Home"} title="Choose a method" />
      <ScrollView
        style={{ height: Dimensions.get("window").height - 110 }}
      ></ScrollView>
      <BottomNav navigation={navigation} activeTab={""} />
    </View>
  );
};

export default LearnOptions;
