import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const Reorder = ({ data, navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: 500 }}>Reorder</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("ReorderScreen", { data: data })}
      >
        <Text style={styles.LearnButton}>Learn</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    height: 200,
    borderRadius: 25,
    marginLeft: "5%",
    backgroundColor: "white",
    elevation: 5,
    marginVertical: 10,
  },
  LearnButton: {
    backgroundColor: "#5DB075",
    paddingHorizontal: 45,
    paddingVertical: 10,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    borderRadius: 100,
    fontSize: 16,
  },
});

export default Reorder;
