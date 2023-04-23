import React, { useCallback, useState } from "react";
import { View, ScrollView, TouchableOpacity } from "react-native";
import Header from "../components/Header";
import TextData from "../components/TextData";
import BottomNav from "../components/BottomNav";
import { Dimensions } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

const Home = ({ navigation }) => {
  const handleBack = () => {
    // Handle the back button press
  };

  const [data, setData] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      let data = await AsyncStorage.multiGet(keys);
      data = data.filter(([key, value]) => {
        return key !== "fileCounter";
      });

      const mappedData = data.map(([key, value]) => {
        const { title, text, percentage } = JSON.parse(value);
        return { key, title, text, percentage };
      });

      setData(mappedData);
    } catch (error) {
      console.error("Error getting all data from AsyncStorage:", error);
      setData([]);
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, [fetchData])
  );

  return (
    <View>
      <Header title="Choose a file to learn" />
      <ScrollView style={{ height: Dimensions.get("window").height - 110 }}>
        {data.map((item) => (
          <TextData
            key={item.key}
            text={item.text}
            title={item.title}
            percentage={item.percentage}
          />
        ))}
      </ScrollView>
      <BottomNav navigation={navigation} activeTab={"Home"} />
    </View>
  );
};

export default Home;
