import React from "react";
import { View, ScrollView } from "react-native";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";
import { Dimensions } from "react-native";
import FillTheBlanks from "../components/FillTheBlanks";
import ChooseForm from "../components/ChooseForm";
import Reorder from "../components/Reorder";

const LearnOptions = ({ navigation, route }) => {
  const { data } = route.params;
  return (
    <View>
      <Header navigation={navigation} back={"Home"} title="Choose a method" />
      <ScrollView
        style={{
          height: Dimensions.get("window").height - 110,
        }}
      >
        <FillTheBlanks data={data} navigation={navigation}></FillTheBlanks>
        <Reorder data={data} navigation={navigation}></Reorder>
        <ChooseForm data={data} navigation={navigation}></ChooseForm>
      </ScrollView>
      <BottomNav navigation={navigation} activeTab={"Home"} />
    </View>
  );
};

export default LearnOptions;
