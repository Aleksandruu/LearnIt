import React from "react";
import { View, ScrollView } from "react-native";
import Header from "../components/Header";
import { Dimensions } from "react-native";
import { Text } from "react-native";
const FillTheBlanksScreen = ({ route, navigation }) => {
  const { data } = route.params;
  console.log(data);
  return (
    <View>
      <Header navigation={navigation} back={1} title="Fill the blanks" />
      <ScrollView style={{ height: Dimensions.get("window").height - 110 }}>
        <Text>{data.text}</Text>
      </ScrollView>
    </View>
  );
};

export default FillTheBlanksScreen;
