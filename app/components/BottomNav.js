import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
const BottomNav = ({ navigation, activeTab }) => {
  const handleTabPress = (tab) => {
    navigation.navigate(tab);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.tabButton]}
        onPress={() => handleTabPress("Home")}
      >
        <Feather
          name="home"
          size={24}
          color="black"
          style={{
            color: activeTab === "Home" ? "green" : "black",
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tabButton]}
        onPress={() => handleTabPress("AddText")}
      >
        <MaterialIcons
          name="add-circle-outline"
          size={26}
          color="black"
          style={{
            color: activeTab === "AddText" ? "green" : "black",
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tabButton]}
        onPress={() => handleTabPress("Statistics")}
      >
        <Ionicons
          name="ios-stats-chart-outline"
          size={24}
          color="black"
          style={{
            color: activeTab === "Statistics" ? "green" : "black",
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tabButton]}
        onPress={() => handleTabPress("Settings")}
      >
        <Feather
          name="settings"
          size={24}
          color="black"
          style={{
            color: activeTab === "Settings" ? "green" : "black",
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 10,
    backgroundColor: "#fafafa",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  tabButton: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
  },
});

export default BottomNav;
