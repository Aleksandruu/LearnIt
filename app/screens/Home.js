import React, { useCallback, useState } from "react";
import { View, ScrollView, TouchableOpacity } from "react-native";
import Header from "../components/Header";
import TextData from "../components/TextData";
import BottomNav from "../components/BottomNav";
import { Dimensions } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { useEffect } from "react";

const Home = ({ navigation }) => {
  const handleBack = () => {
    // Handle the back button press
  };
  const [edit, setEdit] = useState(false);
  const [data, setData] = useState([]);
  const [solved, setSolved] = useState(false);

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
      setEdit(false);
      fetchData();
    }, [fetchData])
  );
  // console.log(data);
  return (
    <View>
      <Header
        title="Choose a file to learn"
        edit={edit}
        setEdit={setEdit}
        editEnable={true}
      />
      <ScrollView style={{ height: Dimensions.get("window").height - 110 }}>
        {data.map((item) => (
          <TouchableOpacity
            key={item.key}
            onPress={() => {
              const itemData = data.find((x) => x.key == item.key);
              navigation.navigate("LearnOptions", {
                data: itemData,
              });
            }}
          >
            <TextData
              kk={item.key}
              text={item.text}
              title={item.title}
              percentage={item.percentage}
              edit={edit}
              data={data}
              setData={setData}
              navigation={navigation}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
      <BottomNav navigation={navigation} activeTab={"Home"} />
    </View>
  );
};

export default Home;
