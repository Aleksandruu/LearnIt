import React from "react";
import { View, ScrollView } from "react-native";
import Header from "../components/Header";
import TextData from "../components/TextData";
import BottomNav from "../components/BottomNav";
import { Dimensions } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = ({ navigation }) => {
  const handleBack = () => {
    // Handle the back button press
  };
  const getData = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const data = await AsyncStorage.multiGet(keys);
      return data.map(([key, value]) => {
        const { title, text, percentage } = JSON.parse(value);
        return { key, title, text, percentage };
      });
    } catch (error) {
      console.error("Error getting all data from AsyncStorage:", error);
      return [];
    }
  };
  let dataArray = [];
  getData()
    .then((data) => {
      dataArray = Array.from(data);
      //console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
  console.log(dataArray);

  return (
    <View>
      <Header title="Choose a file to learn" />
      <ScrollView style={{ height: Dimensions.get("window").height - 110 }}>
        {dataArray.map((text) => {
          return (
            <TextData
              text={text.text}
              title={text.title}
              percentage={text.percentage}
            ></TextData>
          );
        })}
        {/* <TextData
          text={dataArray[0].text}
          title={dataArray[0].title}
          percentage={dataArray[0].percentage}
        ></TextData> */}
      </ScrollView>
      <BottomNav navigation={navigation} activeTab={"Home"}></BottomNav>
    </View>
  );
};

export default Home;
