import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const BottomNav = () => {
  const [activeTab, setActiveTab] = useState("home");

  const handleTabPress = (tab) => {
    setActiveTab(tab);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.tabButton]}
        onPress={() => handleTabPress("home")}
      >
        <Feather
          name="home"
          size={24}
          color="black"
          style={{
            color: activeTab === "home" ? "green" : "black",
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tabButton]}
        onPress={() => handleTabPress("home")}
      >
        <MaterialIcons
          name="add-circle-outline"
          size={26}
          color="black"
          style={{
            color: activeTab === "add-new" ? "green" : "black",
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tabButton]}
        onPress={() => handleTabPress("statistics")}
      >
        <Ionicons
          name="ios-stats-chart-outline"
          size={24}
          color="black"
          style={{
            color: activeTab === "statistics" ? "green" : "black",
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tabButton]}
        onPress={() => handleTabPress("settings")}
      >
        <Feather
          name="settings"
          size={24}
          color="black"
          style={{
            color: activeTab === "settings" ? "green" : "black",
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
