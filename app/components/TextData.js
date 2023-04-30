import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const TextData = ({
  navigation,
  kk,
  title,
  text,
  percentage,
  edit,
  data,
  setData,
}) => {
  const removeItem = async (key) => {
    try {
      await AsyncStorage.removeItem(key);
      console.log(`Item with key ${key} removed successfully!`);
    } catch (error) {
      console.log(`Error removing item with key ${key}: ${error}`);
    }
  };
  const handleDelete = (key) => {
    removeItem(key);
    let newData = data.filter((x) => x.key !== key);
    setData(newData);
  };
  return (
    <View style={styles.bigContainer}>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          <Text style={styles.text} numberOfLines={2}>
            {text}
          </Text>
        </View>
        <View style={styles.percentageContainer}>
          <Text style={styles.percentage}>
            {percentage !== 0 ? String(percentage) + "%" : "New"}
          </Text>
          {edit && (
            <TouchableOpacity
              style={{ marginHorizontal: 10, marginLeft: 16 }}
              onPress={() => {
                const itemData = data.find((x) => x.key == kk);
                navigation.navigate("EditScreen", {
                  data: itemData,
                });
              }}
            >
              <Feather name="edit" size={22} color="green" />
            </TouchableOpacity>
          )}
          {edit && (
            <TouchableOpacity onPress={() => handleDelete(kk)}>
              <MaterialIcons name="delete-outline" size={24} color="red" />
            </TouchableOpacity>
          )}
        </View>
      </View>
      <View style={styles.hr}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  bigContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    paddingRight: 0,
    paddingBottom: 10,
    width: "100%",
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  text: {
    fontSize: 14,
    color: "#666",
  },
  percentageContainer: {
    flexDirection: "row",
    padding: 8,
    paddingRight: 12,
  },
  percentage: {
    fontSize: 16,
    color: "black",
  },
  hr: {
    height: 1,
    width: "90%",
    backgroundColor: "#e8e8e8",
  },
});

export default TextData;
