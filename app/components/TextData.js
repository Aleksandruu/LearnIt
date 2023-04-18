import React from "react";
import { StyleSheet, View, Text } from "react-native";

const TextData = ({ title, text, percentage }) => {
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
          <Text style={styles.percentage}>{percentage}%</Text>
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
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    padding: 8,
  },
  percentage: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  hr: {
    height: 1,
    width: "90%",
    backgroundColor: "#e8e8e8",
  },
});

export default TextData;
