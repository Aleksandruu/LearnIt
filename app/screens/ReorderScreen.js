import React from "react";
import { View, ScrollView } from "react-native";
import Header from "../components/Header";
import { Dimensions } from "react-native";

const ReorderScreen = ({ route, navigation }) => {
  const { data } = route.params;
  console.log(data);
  return (
    <View>
      <Header navigation={navigation} back={1} title="Reorder the lines" />
      <ScrollView
        style={{ height: Dimensions.get("window").height - 110 }}
      ></ScrollView>
    </View>
  );
};

export default ReorderScreen;
